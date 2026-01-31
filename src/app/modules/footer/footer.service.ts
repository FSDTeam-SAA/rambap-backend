import { Footer } from './footer.model';
import { TFooter } from './footer.interface';

const getFooter = async () => {
  const result = await Footer.findOne();
  return result;
};

const updateFooter = async (payload: Partial<TFooter>) => {
  const result = await Footer.findOneAndUpdate({}, payload, {
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
