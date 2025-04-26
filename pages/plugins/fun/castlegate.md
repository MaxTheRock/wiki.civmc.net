---
title: Castle Gates
description: Castle Gates plugin documentation
---

# Castle Gates

The CastleGates plugin allows players to create retractable bridges, gates, and other redstone-activated structures. It supports integration with Citadel, Bastion, and JukeAlert plugins for enhanced security and automation.

## How to Create a Basic Bridge

1. Place two blocks opposite each other.
2. Left-click the first block with a gold ingot to register it as a gearblock (the ingot is consumed).
3. Left-click the second block with a gold ingot to register it and create a link with the first gearblock.
4. Place bridge blocks between the gearblocks.
5. Attach a stone button to one of the gearblocks.

Activating the button will draw the bridge. Activating it again will undraw the bridge.

**Example videos:**
- [Simple Bridge](https://youtu.be/RCpiQysWPTU)
- [Advanced Bridge](https://youtu.be/HyUKJfbJeP4)
- [Gates](https://youtu.be/-2Zu8b-rgPc)
- [Trap](https://youtu.be/vVHN2fF5sFo)
- [Lockable Vertical Entrance](https://youtu.be/AyYhgpD6IJk)

## Behavior

### Gearblock and Link Creation

Left-clicking a block with a gold ingot attempts to register it as a gearblock if allowed by the config. Upon registration, the plugin searches for an opposite gearblock to create a link.

**Link creation conditions:**
- Minimum 1 block space between gearblocks.
- No other gearblocks between them.
- Maximum distance: **16 blocks** (configurable).

Use `/cg link` to manually remove or create links if automatic linking is undesired.

### Bridge/Gate Drawing and Undrawing

When a gearblock receives redstone power:
- If the bridge is **undrawn**, it will attempt to **draw** the bridge (assuming all bridge blocks are allowed types).
- If the bridge is **drawn**, it will attempt to **undraw** (only if the space becomes air).

### Power Transfer Between Adjacent Gearblocks

When two gearblocks are adjacent:
- Power state changes are transferred between them, up to **8 transfers** by default (configurable).

Useful for creating wide bridges or gates with multiple linked blocks.

### Handling Broken Gearblocks

If a gearblock is broken while the link is drawn:
- Replacing the broken block with a new gearblock can restore the link.
- If both gearblocks are broken, the link and bridge blocks are lost.

### Timer

Introduced in version 1.0.10, timers allow gearblocks to automatically revert after a set time.

- Set timers using `/cg timer` and left-click a gearblock.
- Timers activate once the gearblock is powered (unless using **DOOR** mode).

#### Door Mode

**DOOR** mode activates the timer when the gearblock loses power, simulating pressure plate door behavior.

### Locking Mechanism

Powered gearblocks and their linked structures become **locked**:
- Locked gearblocks cannot be activated until unlocked (power removed or a block/link changed).

Helpful for integrating with Citadel for secure gates.

### Simple Activation

When only two gearblocks and connecting blocks exist, right-clicking a bridge block can activate the bridge directly.

## Plugin Integrations

### Citadel

Conditions for drawing/undrawing bridges:
- Players within 7 blocks must have **DOORS** permission for all relevant gearblocks and bridge blocks.
- Reinforcements remain intact after drawing/undrawing.

Optional setting: require gearblocks to be reinforced before registration.

### Bastion

Conditions for undrawing bridges:
- Players must have **BASTION_BRIDGE_UNDRAW** permission if bridge crosses a bastioned area.
- Alternatively, bridges reinforced by an allowed group can bypass this.

### JukeAlert

If **/jaToggleLevers 1** is enabled:
- Reinforced gearblocks can be activated by nearby JukeAlert snitches (within 7 blocks) reinforced by the same group.

Useful for building automated traps.

## Commands

See [CastleGates Commands](/pages/commands/c/castlegates.md) for a full list of commands like `/cg`, `/gear`, `/link`, and more.
