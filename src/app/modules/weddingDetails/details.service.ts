import { DayProgram } from './dayProgram.model';
import { WeddingMenu } from './weddingMenu.model';
import { TDayProgram } from './dayProgram.interface';
import { TWeddingMenu } from './weddingMenu.interface';
import { DayProgramFr } from './dayProgram.model.fr';
import { WeddingMenuFr } from './weddingMenu.model.fr';

// Program Functions
const getProgram = async (language: string = 'english') => {
  const Model = language === 'france' ? DayProgramFr : DayProgram;
  const result = await Model.findOne();
  return result;
};

const updateProgram = async (
  payload: Partial<TDayProgram>,
  language: string = 'english',
) => {
  const Model = language === 'france' ? DayProgramFr : DayProgram;
  const result = await Model.findOneAndUpdate({}, payload, {
    new: true,
    upsert: true,
    runValidators: true,
  });
  return result;
};

// Menu Functions
const getMenu = async (language: string = 'english') => {
  const Model = language === 'france' ? WeddingMenuFr : WeddingMenu;
  const result = await Model.findOne();
  return result;
};

const updateMenu = async (
  payload: Partial<TWeddingMenu>,
  language: string = 'english',
) => {
  const Model = language === 'france' ? WeddingMenuFr : WeddingMenu;
  const result = await Model.findOneAndUpdate({}, payload, {
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
