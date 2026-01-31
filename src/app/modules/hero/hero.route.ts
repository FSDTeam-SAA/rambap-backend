import express from 'express';
import { HeroControllers } from './hero.controller';
import validateRequest from '../../middlewares/validateRequest';
import { HeroValidation } from './hero.validation';
import auth from '../../middlewares/auth';
import { fileUploader } from '../../helper/fileUploder';

const router = express.Router();

router.get('/', HeroControllers.getHero);

router.put(
  '/',
  auth(),
  fileUploader.upload.single('file'),
  validateRequest(HeroValidation.updateHeroValidationSchema),
  HeroControllers.updateHero,
);

export const HeroRoutes = router;
