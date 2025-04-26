---
title: ClearLag
description: ClearLag plugin commands documentation
---

# ClearLag

ClearLag is a plugin used to reduce server lag by automatically clearing excess entities like dropped items and mobs, improving server performance.

Below are all the important ClearLag commands with descriptions:

## `/lagg clear`
Manually clears all ground entities (items, mobs, boats, etc.) to reduce lag.

## `/lagg killmobs`
Kills all mobs currently loaded in the world. Players and pets are unaffected.

## `/lagg chunk`
Displays a list of the most entity-heavy chunks around you, useful for finding laggy areas.

## `/lagg unload`
Unloads chunks that are not in active use to save server memory.

## `/lagg tpchunk`
Teleport to a chunk that has a high number of entities.

## `/lagg halt`
Freezes all entities temporarily (they will not move) — useful for lag investigation.

## `/lagg check`
Shows how many entities are currently loaded in the server.

## `/lagg gc`
Displays garbage collection info and how much memory is free/used.

## `/lagg tps`
Shows the server's current ticks per second (TPS), an indicator of server health and lag.

## `/lagg reload`
Reloads the ClearLag configuration file without restarting the server.

---