import express from 'express';
import { FooterControllers } from './footer.controller';
import validateRequest from '../../middlewares/validateRequest';
import { FooterVal } from './footer.validation';
import auth from '../../middlewares/auth';

const router = express.Router();

router.get('/', FooterControllers.getFooter);

router.put(
  '/',
  auth(),
  validateRequest(FooterVal.updateFooter),
  FooterControllers.updateFooter,
);

export const FooterRoutes = router;
