import { GuestInfo } from './guestInfo.model';
import { TGuestInfo } from './guestInfo.interface';

const getGuestInfo = async () => {
  const result = await GuestInfo.findOne();
  return result;
};

const updateGuestInfo = async (payload: Partial<TGuestInfo>) => {
  const result = await GuestInfo.findOneAndUpdate({}, payload, {
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
