import {
  BerthRemovalConfirmationRequired,
  requireBerthRemovalConfirmation,
} from './src/berth-removal.mjs';

// These two fictional stops stand in for the result of the product's lookup.
const affectedStops = [
  { itinerary_id: 42, berth_name: 'Quay A' },
  { itinerary_id: 57, requested_at: '2026-05-12' },
];
const confirmedIds = process.argv.slice(2).map(Number);

try {
  requireBerthRemovalConfirmation(affectedStops, confirmedIds);
  console.log('All affected stops confirmed. The edit may proceed.');
} catch (error) {
  if (!(error instanceof BerthRemovalConfirmationRequired)) throw error;
  const affectedIds = error.stops.map(stop => stop.itinerary_id);
  const missingIds = affectedIds.filter(id => !confirmedIds.includes(id));
  console.log(`Affected stops: ${affectedIds.join(', ')}.`);
  console.log(`Still awaiting approval to remove berth data for: ${missingIds.join(', ')}.`);
}
