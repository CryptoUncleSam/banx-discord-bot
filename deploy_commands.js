import { SlashCommandBuilder, Routes } from "discord.js";
import { REST } from "@discordjs/rest";
import dotenv from "dotenv";

dotenv.config();

const commands = [
  new SlashCommandBuilder()
    .setName("banx")
    .setDescription("Command to generate banx")
    .addIntegerOption((option) =>
      option.setName("banxnumber")
        .setDescription("Number of banx to generate")
        .setRequired(true)
    )
    .addStringOption((option) =>
      option.setName("imagetype")
        .setDescription("Type of image to generate")
        .setRequired(true)
        .addChoices(
          { name: 'No Background', value: 'nobg' },
					{ name: 'Phone Wallpaper Logo', value: 'wallpaper' },
          { name: 'Phone Wallpaper No Logo', value: 'wallpapernologo' },
          { name: 'Twitter Banner Logo', value: 'banner' },
          { name: 'Twitter Banner No Logo', value: 'bannernologo' },
        )
    )
].map((command) => command.toJSON());

const rest = new REST({ version: "10" }).setToken(process.env.DISCORD_TOKEN);

rest
  .put(
    Routes.applicationGuildCommands(
      process.env.DISCORD_APP_ID,
      process.env.DISCORD_GUILD_ID
    ),
    { body: commands }
  )
  .then((data) =>
    console.log(`Successfully registered ${data.length} application commands.`)
  )
  .catch(console.error);
