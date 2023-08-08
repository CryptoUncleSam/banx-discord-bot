import pkg from "discord.js";
const { Client, GatewayIntentBits } = pkg;
import dotenv from "dotenv";
import { generateBanx } from "./generate_banx.js";
import { generateMultiplesBanxs } from "./generate_multiples_banxs.js";

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
    const color = interaction.options.getString("color");
    const imageType = interaction.options.getSubcommand();

    // generate banx
    try {
      const buffer = await generateBanx(banxNumber, imageType, color);

      //   finally send reply

      await interaction.editReply({ files: [{ attachment: buffer }] });
    } catch (error) {
      console.log(error);
    }
  }
  if (commandName === "banxes") {
    // get banx number and image type from user
    const banxNumber = interaction.options.getInteger("banxnumber");
    const banxNumber1 = interaction.options.getInteger("banxnumber1");
    const banxNumber2 = interaction.options.getInteger("banxnumber2");
    const banxNumber3 = interaction.options.getInteger("banxnumber3");
    const banxNumber4 = interaction.options.getInteger("banxnumber4");

    const imageType = interaction.options.getSubcommand();

    const color = interaction.options.getString("color");

    let banxesNumbers = [
      {place: 'middle', number: banxNumber},
      {place: 'middleRight', number: banxNumber1},
      {place: 'middleLeft', number: banxNumber2},
      {place: 'right', number: banxNumber3},
      {place: 'left', number: banxNumber4}
    ]

    

    // generate banx
    try {
      const buffer = await generateMultiplesBanxs(banxesNumbers, color, imageType)

      //   finally send reply

      await interaction.editReply({ files: [{ attachment: buffer }] });
    } catch (error) {
      console.log(error);
    }
  }
});
