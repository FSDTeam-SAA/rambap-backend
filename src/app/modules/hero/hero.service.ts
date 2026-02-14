// import { Hero } from './hero.model';
import { THero } from './hero.interface';
import { Hero } from './hero.model';
import { HeroFr } from './hero.model.fr';

const getHero = async (language: string = 'english') => {
  const Model = language === 'france' ? HeroFr : Hero;
  const result = await Model.findOne();
  return result;
};

const updateHero = async (
  payload: Partial<THero>,
  language: string = 'english',
) => {
  // 1. Choose the correct model based on language
  const Model = language === 'france' ? HeroFr : Hero;

  // 2. Update or Create (Upsert) the document
  const result = await Model.findOneAndUpdate({}, payload, {
    new: true,
    upsert: true,
    runValidators: true,
  });

  return result;
};

export const HeroServices = {
  getHero,
  updateHero,
};
