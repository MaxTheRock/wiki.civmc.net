---
title: Citadel
description: Citadel plugin commands documentation
---

# Citadel

Citadel is a block reinforcement and protection plugin on CivMC that allows players to secure structures against unauthorized access or griefing.

Below are all the important Citadel commands with descriptions:

## `/ctreinforce`
Switches your mode to reinforcement mode, allowing you to reinforce blocks using the currently selected reinforcement material.

## `/ctinfo`
Displays information about the reinforcement status of the block you are looking at.

## `/ctoff`
Turns off reinforcement mode so you stop reinforcing every block you place.

## `/ctinsecure`
Makes a reinforcement insecure, allowing anyone to break the block without Citadel protection.

## `/ctsecure`
Restores a block's reinforcement back to secure mode.

## `/ctbypass`
Toggles bypass mode, allowing you to place or break blocks without Citadel enforcement, useful for admins or special permissions.

## `/ctgroup`
Opens group management commands under `/ctg`, such as creating and editing reinforcement groups.

## `/ctg create <groupName>`
Creates a new Citadel reinforcement group with the specified name.

## `/ctg info`
Shows information about the reinforcement group you're looking at or currently selected.

## `/ctg addmember <player>`
Adds a player to the selected Citadel group as a member (can interact with reinforced blocks).

## `/ctg addmod <player>`
Adds a player to the selected Citadel group as a moderator (can manage members and settings).

## `/ctg removemember <player>`
Removes a member from the Citadel group.

## `/ctg removemod <player>`
Removes a moderator from the Citadel group.

## `/ctg disband`
Disbands and deletes the current Citadel group.

## `/ctg transferownership <player>`
Transfers group ownership to another player.

## `/ctg password <password>`
Sets a password for the group so players can join with the password.

## `/ctg join <groupName> <password>`
Joins a Citadel group using the group name and password.

## `/ctg leave`
Leaves the current Citadel group.

## `/ctg list`
Lists all members and moderators of the selected group.

## `/ctg rename <newName>`
Renames the Citadel group.

## `/ctr`
Shortcut for `/ctreinforce` to toggle reinforcement mode.

## `/ctp`
Toggles "pickaxe mode", allowing you to reinforce blocks by right-clicking them with a pickaxe.

## `/cts`
Toggles "sword mode", which allows you to easily reinforce doors by hitting them with a sword.

## `/ctv`
Toggles "visualization mode" to see reinforcement fields more easily.

## `/ctacidblock`
Places an acid block that can destroy reinforcements over time.

## `/ctacidclean`
Removes an acid block you placed.

## `/ctmaterial`
Selects a material to reinforce with (example: `/ctmaterial stonebrick`).

---