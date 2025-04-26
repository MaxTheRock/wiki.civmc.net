---
title: CombatTagPlus
description: CombatTagPlus plugin commands documentation
---

# CombatTagPlus

CombatTagPlus is a plugin used to prevent combat logging by tagging players who are in combat. Players are unable to leave the server or teleport while tagged, ensuring they stay in the fight.

Below are all the important CombatTagPlus commands with descriptions:

## `/ct` 
Displays the general information or status of the CombatTagPlus plugin.

## `/ct reload`
Reloads the configuration file for CombatTagPlus. Useful for applying any changes to the config file without restarting the server.

## `/ct disable`
Disables CombatTagPlus temporarily. This will remove combat tagging protection until the plugin is re-enabled.

## `/ct enable`
Enables CombatTagPlus after it has been disabled. Re-enables the combat tagging system.

## `/ct set <player> <time>`
Sets the combat tag duration for a specific player, adjusting how long they stay tagged after entering combat.

## `/ct reset <player>`
Resets the combat tag for a specific player, allowing them to exit combat without waiting for the normal duration.

## `/ct info <player>`
Displays information about the specified player's combat tag status, including whether they are currently tagged.

## `/ct clear <player>`
Clears the combat tag from a specific player, removing any combat status and allowing them to teleport or log out immediately.

## `/ct toggle <player>`
Toggles the combat tag for a specific player on or off. Use this command to manually tag or untag a player.

## `/ct list`
Lists all currently tagged players. Useful for admins to quickly view players who are currently in combat.

## `/ct ban <player>`
Temporarily bans a player for combat logging, if they log out or teleport while tagged.

## `/ct unban <player>`
Unbans a player who was banned for combat logging.

## `/ct settings`
Opens the settings menu for CombatTagPlus, allowing you to adjust the configuration of the plugin through in-game commands.

## `/ct cooldown <time>`
Sets the cooldown time between combat tags for a specific player. This prevents spamming the command and entering combat repeatedly within a short period.

## `/ct force`
Forcefully applies a combat tag to a player. This can be useful for admins to manually tag a player.

## `/ct end <player>`
Ends the combat for a specific player, removing their combat tag manually.

## `/ct show <player>`
Shows the combat tag for a specific player, useful for admins to check the combat tag visually.

## `/ct disabletag <player>`
Disables combat tags for a specific player, meaning they will not receive any combat tags while engaged in combat.

## `/ct enabletag <player>`
Re-enables combat tags for a specific player, ensuring they are tagged during combat.

---