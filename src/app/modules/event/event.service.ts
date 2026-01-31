import { Event } from './event.model';
import { TEvent } from './event.interface';

const getEvent = async () => {
  const result = await Event.findOne();
  return result;
};

const updateEvent = async (payload: Partial<TEvent>) => {
  const result = await Event.findOneAndUpdate({}, payload, {
    new: true,
    upsert: true,
    runValidators: true,
  });
  return result;
};

export const EventServices = {
  getEvent,
  updateEvent,
};
