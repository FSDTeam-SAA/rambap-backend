import { Rsvp } from './rsvp.model';
import { TRsvp } from './rsvp.interface';
import { RsvpFr } from './rsvp.model.fr';

const createRsvp = async (payload: TRsvp, language: string = 'english') => {
  const Model = language === 'france' ? RsvpFr : Rsvp;
  const result = await Model.create(payload);
  return result;
};

const getRsvps = async (language: string = 'english') => {
  const Model = language === 'france' ? RsvpFr : Rsvp;
  const result = await Model.find().sort({ createdAt: -1 });
  return result;
};

export const RsvpServices = {
  createRsvp,
  getRsvps,
};
