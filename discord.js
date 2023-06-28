import { Client, GatewayIntentBits } from "discord.js";
import dotenv from "dotenv";
import { generateBanx, deleteImage} from "./generate_banx.js";

dotenv.config();

// Create discord client
const client = new Client({
    intents: [GatewayIntentBits.Guilds],
});

// Login into discord bot
const clientInit = async () => {
    
    client.on("ready", async () => {
    console.log(`Discord logged in as ${client.user?.tag}`);
  });

  await client.login(process.env.DISCORD_TOKEN);

  return client;
};

// Initialize discord client
await clientInit();

// Catching slash commands
client.on("interactionCreate", async (interaction) => {
    if (!interaction.isChatInputCommand()) return;
    // make bot await the reply
    await interaction.deferReply();
    const { commandName } = interaction;
    // logic for command
    if (commandName === "banx") {

        // get banx number and image type from user
        const banxNumber = interaction.options.getInteger("banxnumber");
        const imageType = interaction.options.getString("imagetype");

        // generate banx
        const image = await generateBanx(banxNumber, imageType);

        //   finally send reply
        await interaction.editReply({ files: [{ attachment: image }] });

        // delete image from server
        deleteImage(image);
    }
});