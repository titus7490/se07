# Hafenmeister · Changing a port with an assigned berth

Hafenmeister among other things helps cruise operators plan voyages and track berth assignments for their ships. A berth is a place to moor at a particular port. There can be multiple and in case of bigger ports even multiple dozens of berths at a Port. If a planner moves a stop to another port while planning because something in the cruise has changed, what should happen to the berth they already arranged?

This example shows the check that pauses a voyage edit until the planner confirms each affected stop. You can run it locally with two fictional stops. The example runs in memory and leaves voyage data untouched.

In the example from the code excerpt, there is a change in ports in stop 42 and 57. Before saving, the planner must approve removing the old berth data for each stop.

- [Try a port change](docs/getting-started.md) to see what happens when you confirm one stop and then both.
- [See where the check fits](docs/architecture.md) for the voyage editor’s decision flow.
- [Read the check](src/berth-removal.mjs) or [change the example](CONTRIBUTING.md).
