import { DayProgram } from './dayProgram.model';
import { WeddingMenu } from './weddingMenu.model';
import { TDayProgram } from './dayProgram.interface';
import { TWeddingMenu } from './weddingMenu.interface';

// Program Functions
const getProgram = async () => {
  const result = await DayProgram.findOne();
  return result;
};

const updateProgram = async (payload: Partial<TDayProgram>) => {
  const result = await DayProgram.findOneAndUpdate({}, payload, {
    new: true,
    upsert: true,
    runValidators: true,
  });
  return result;
};

// Menu Functions
const getMenu = async () => {
  const result = await WeddingMenu.findOne();
  return result;
};

const updateMenu = async (payload: Partial<TWeddingMenu>) => {
  const result = await WeddingMenu.findOneAndUpdate({}, payload, {
    new: true,
    upsert: true,
    runValidators: true,
  });
  return result;
};

export const DetailsServices = {
  getProgram,
  updateProgram,
  getMenu,
  updateMenu,
};
