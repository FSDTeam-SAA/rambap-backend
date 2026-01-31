import { Hero } from './hero.model';
import { THero } from './hero.interface';

const getHero = async () => {
  const result = await Hero.findOne();
  return result;
};

const updateHero = async (payload: Partial<THero>) => {
  const result = await Hero.findOneAndUpdate({}, payload, {
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
