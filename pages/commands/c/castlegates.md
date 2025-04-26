---
title: CastleGates
description: Description of CastleGates Commands
---
# CastleGates
List of the castlegates commands. More about this plugin can be found [here](/pages/plugins/fun/castlegate.md)


## `/cg`
This command is associated with the CastleGates plugin, which enables the creation and management of retractable gates and bridges. This plugin allows players to build complex, redstone-activated structures that can be toggled open or closed, enhancing both the functionality and aesthetics of builds.

#### Using the `/cg` command:
The `/cg` command is used to manage CastleGate structures. Specific subcommands and usage include:

- **Creating a gate**: `/cg create` — Left-click with a stick on a block. A gold ingot will be consumed, and the block will be registered as a gearblock.
- **Linking gearblocks**: `/cg link` — Left-click with a stick on a non-linked gearblock to link it to the gearblock opposite the clicked face. Left-clicking a linked gearblock will remove the link.
- **Setting a timer**: `/cg timer [<period in seconds> [draw | undraw | revert]] [door]` — Left-click on a gearblock to set or remove a timer.
  - Example: `/cg timer 5 DRAW`
  - Default period: 5 seconds.
  - Default operation: UNDRAW.
  - **Operations**:
    - **DRAW**: Bridge/gates will be drawn when the timer activates.
    - **UNDRAW**: Bridge/gates will be undrawn when the timer activates.
    - **REVERT**: Bridge/gates' state will be toggled when the timer activates.
  - **Door mode**: Activates the timer after the gearblock becomes unpowered. `/cg timer door` sets a 1-second period with UNDRAW operation.
- **Checking block info**: `/cg info` — Left-click a block to see if it is a gearblock or bridge block.
- **Reloading**: `/cg reload` — Reloads all gearblocks and links and restarts helper threads. This can only be used from the server's console.

---

## `/gear`
The `/gear` command is an alias for `/cg create`.

#### Using the `/gear` command:
- **Creating a gearblock**: `/gear` — Left-click with a stick on the target block. A gold ingot will be consumed and the block will be registered as a gearblock for building gates or bridges.

---

## `/link`
The `/link` command is an alias for `/cg link`.

#### Using the `/link` command:
- **Linking gearblocks**: `/link` — Left-click with a stick on a non-linked gearblock to link it to the block opposite the face you clicked.
- **Unlinking gearblocks**: Left-click on an already linked gearblock to remove its link.

---

> 📅 For additional technical details and examples, go to [Castle Gates](/pages/plugins/fun/castlegate.md).