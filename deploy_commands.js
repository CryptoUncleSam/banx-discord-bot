import { Routes } from "discord.js";
import { REST } from "@discordjs/rest";
import { baxnCommand } from "./banxCommand.js";
import dotenv from "dotenv";

dotenv.config();

const commands = [
  baxnCommand, 
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
