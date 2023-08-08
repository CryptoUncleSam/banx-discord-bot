import { SlashCommandBuilder } from "discord.js";

export const banxesCommand = new SlashCommandBuilder()
  .setName("banxes")
  .setDescription("Command to generate banx image")
  .addSubcommand(subcommand =>
    subcommand
        .setName('x_banner_logo')
        .setDescription('X Banner Logo')
        .addStringOption((option) =>
            option.setName("color")
                .setDescription("Select Background Color")
                .setRequired(true)
                .addChoices(
                    { name: 'Frakt black (Frakt)', value: 'frakt black' },
                )
        )
        .addIntegerOption((option) =>
            option.setName("banxnumber") 
                .setDescription("Middle")
                .setRequired(true),
        )
        .addIntegerOption((option) =>
            option.setName("banxnumber1")
                .setDescription("Middle right")
                .setRequired(false),
        )
        .addIntegerOption((option) =>
            option.setName("banxnumber2")
                .setDescription("Middle left")
                .setRequired(false),
        )
        .addIntegerOption((option) =>
            option.setName("banxnumber3")
                .setDescription("Right")
                .setRequired(false),
        )
        .addIntegerOption((option) =>
            option.setName("banxnumber4")
                .setDescription("Left")
                .setRequired(false)
        )
        
  )
  .addSubcommand(subcommand =>
    subcommand
        .setName('x_banner_no_logo')
        .setDescription('X Banner No Logo')
        .addStringOption((option) =>
            option.setName("color")
                .setDescription("Select Background Color")
                .setRequired(true)
                .addChoices(
                    { name: 'Blue', value: 'blue' },
                    { name: 'Frakt green', value: 'frakt green' },
                    { name: 'Gray', value: 'gray' },
                    { name: 'Green', value: 'green' },
                    { name: 'Navy', value: 'Navy' },
                    { name: 'Orange', value: 'Orange' },
                    { name: 'Pink', value: 'Pink' },
                    { name: 'Purple', value: 'Purple' },
                    { name: 'Red', value: 'Red' },
                    { name: 'White', value: 'White' },
                    { name: 'Yellow', value: 'Yellow' },
                )
        )
        .addIntegerOption((option) =>
            option.setName("banxnumber") 
                .setDescription("Middle")
                .setRequired(true),
        )
        .addIntegerOption((option) =>
            option.setName("banxnumber1")
                .setDescription("Middle right")
                .setRequired(false),
        )
        .addIntegerOption((option) =>
            option.setName("banxnumber2")
                .setDescription("Middle left")
                .setRequired(false),
        )
        .addIntegerOption((option) =>
            option.setName("banxnumber3")
                .setDescription("Right")
                .setRequired(false),
        )
        .addIntegerOption((option) =>
            option.setName("banxnumber4")
                .setDescription("Left")
                .setRequired(false)
        )
        
  )