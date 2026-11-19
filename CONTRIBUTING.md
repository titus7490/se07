# Changing the berth confirmation example

To try another itinerary, edit the fictional stops in [example.mjs](example.mjs). Keep the confirmation rule in [src/berth-removal.mjs](src/berth-removal.mjs). Use itinerary stop IDs throughout. Two stops can visit the same port, so a port ID cannot identify which arrangement the planner agreed to lose.

Before opening a pull request, run the [walkthrough](docs/getting-started.md) from the repository root. Check that partial confirmation pauses the edit and that full confirmation lets it proceed. If you change the fixture IDs or the messages, update the commands and expected output alongside the code. In the pull request, describe the case you changed and the result you saw.

## Source of the example

The decision comes from `requireBerthRemovalConfirmation` in Hafenmeister’s `backend/features/voyages/itineraryBerthRemoval.ts` (revision `81f6723`). The excerpt keeps the original membership check and returns the same affected stops. It accepts those stops as an argument in place of the database lookup. The standalone JavaScript error retains the stop list and omits the product’s HTTP response method.
