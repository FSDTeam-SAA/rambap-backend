import { Footer } from './footer.model';
import { TFooter } from './footer.interface';
import { FooterFr } from './footer.model.fr';

const getFooter = async (language: string = 'english') => {
  const Model = language === 'france' ? FooterFr : Footer;
  const result = await Model.findOne();
  return result;
};

const updateFooter = async (
  payload: Partial<TFooter>,
  language: string = 'english',
) => {
  const Model = language === 'france' ? FooterFr : Footer;
  const result = await Model.findOneAndUpdate({}, payload, {
    new: true,
    upsert: true,
    runValidators: true,
  });
  return result;
};

export const FooterServices = {
  getFooter,
  updateFooter,
};
