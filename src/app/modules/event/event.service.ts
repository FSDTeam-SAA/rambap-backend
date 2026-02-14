import { Event } from './event.model';
import { TEvent } from './event.interface';
import { EventFr } from './event.model.fr';

const getEvent = async (language: string = 'english') => {
  const Model = language === 'france' ? EventFr : Event;
  const result = await Model.findOne();
  return result;
};

const updateEvent = async (
  payload: Partial<TEvent>,
  language: string = 'english',
) => {
  const Model = language === 'france' ? EventFr : Event;
  const result = await Model.findOneAndUpdate({}, payload, {
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
