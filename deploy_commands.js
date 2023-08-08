import { Routes } from "discord.js";
import { REST } from "@discordjs/rest";
import { banxCommand } from "./banxCommand.js";
import { banxesCommand } from "./banxesCommand.js";
import dotenv from "dotenv";

dotenv.config();

const commands = [
  banxCommand, 
  banxesCommand
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
