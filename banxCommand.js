import { SlashCommandBuilder } from "discord.js";

export const banxCommand = new SlashCommandBuilder()
  .setName("banx")
  .setDescription("Command to generate banx")
  .addSubcommand(subcommand =>
    subcommand
        .setName('no_background')
        .setDescription('No Background Banx')
        .addIntegerOption((option) =>
            option.setName("banxnumber")
                .setDescription("Number of banx to generate")
                .setRequired(true)
        )
  )
  .addSubcommand(subcommand =>
    subcommand
        .setName('kill_banx')
        .setDescription('Turn you banx into a zombie')
        .addIntegerOption((option) =>
            option.setName("banxnumber")
                .setDescription("Number of banx to generate")
                .setRequired(true)
        )
  )
  .addSubcommand(subcommand =>
    subcommand
        .setName('phone_wallpaper_logo')
        .setDescription('Phone Wallpaper Logo')
        .addIntegerOption((option) =>
            option.setName("banxnumber")
                .setDescription("Number of banx to generate")
                .setRequired(true)
        )
        .addStringOption((option) =>
            option.setName("color")
                .setDescription("Select Background Color")
                .setRequired(true)
                .addChoices(
                    { name: 'Default', value: 'default' },
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
  )
  .addSubcommand(subcommand =>
    subcommand
        .setName('phone_wallpaper_no_logo')
        .setDescription('Phone Wallpaper No Logo')
        .addIntegerOption((option) =>
            option.setName("banxnumber")
                .setDescription("Number of banx to generate")
                .setRequired(true)
        )
        .addStringOption((option) =>
            option.setName("color")
                .setDescription("Select Background Color")
                .setRequired(true)
                .addChoices(
                    { name: 'Default', value: 'default' },
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
  )
  .addSubcommand(subcommand =>
    subcommand
        .setName('x_banner_logo')
        .setDescription('X Banner Logo')
        .addIntegerOption((option) =>
            option.setName("banxnumber")
                .setDescription("Number of banx to generate")
                .setRequired(true)
        )
        .addStringOption((option) =>
            option.setName("color")
                .setDescription("Select Background Color")
                .setRequired(true)
                .addChoices(
                    { name: 'Default', value: 'default' },
                    { name: 'Blue', value: 'blue' },
                    { name: 'Frakt green', value: 'frakt green' },
                    { name: 'Frakt green (Multiple)', value: 'green multiple' },
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
  )
  .addSubcommand(subcommand =>
    subcommand
        .setName('x_banner_no_logo')
        .setDescription('X Banner No Logo')
        .addIntegerOption((option) =>
            option.setName("banxnumber")
                .setDescription("Number of banx to generate")
                .setRequired(true)
        )
        .addStringOption((option) =>
            option.setName("color")
                .setDescription("Select Background Color")
                .setRequired(true)
                .addChoices(
                    { name: 'Default', value: 'default' },
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
  )