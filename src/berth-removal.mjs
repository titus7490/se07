// A berth belongs to one port. Changing ports or deleting the stop can lose
// an existing arrangement, so the planner must be able to review it first.
export class BerthRemovalConfirmationRequired extends Error {
  constructor(stops) {
    super('This change removes the berth data of these stops');
    this.stops = stops;
  }
}

// The caller supplies only stops that would lose berth data.
// One confirmation is good for one itinerary stop, even if several stops visit the same port.
export function requireBerthRemovalConfirmation(stops, confirmedStopIds) {
  const confirmed = new Set(confirmedStopIds);
  if (stops.some(stop => !confirmed.has(stop.itinerary_id))) {
    // The dialog lists all affected stops so the planner can review the whole change.
    throw new BerthRemovalConfirmationRequired(stops);
  }
  return stops;
}
