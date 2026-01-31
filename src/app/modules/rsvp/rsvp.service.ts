import { Rsvp } from './rsvp.model';
import { TRsvp } from './rsvp.interface';

const createRsvp = async (payload: TRsvp) => {
  const result = await Rsvp.create(payload);
  return result;
};

const getRsvps = async () => {
  const result = await Rsvp.find().sort({ createdAt: -1 });
  return result;
};

export const RsvpServices = {
  createRsvp,
  getRsvps,
};
