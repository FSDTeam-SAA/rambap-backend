import { GuestInfo } from './guestInfo.model';
import { TGuestInfo } from './guestInfo.interface';
import { GuestInfoFr } from './guestInfo.model.fr';

const getGuestInfo = async (language: string = 'english') => {
  const Model = language === 'france' ? GuestInfoFr : GuestInfo;
  const result = await Model.findOne();
  return result;
};

const updateGuestInfo = async (
  payload: Partial<TGuestInfo>,
  language: string = 'english',
) => {
  const Model = language === 'france' ? GuestInfoFr : GuestInfo;
  const result = await Model.findOneAndUpdate({}, payload, {
    new: true,
    upsert: true,
    runValidators: true,
  });
  return result;
};

export const GuestInfoServices = {
  getGuestInfo,
  updateGuestInfo,
};
