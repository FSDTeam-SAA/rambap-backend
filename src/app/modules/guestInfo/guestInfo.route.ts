import express from 'express';
import { GuestInfoControllers } from './guestInfo.controller';
import validateRequest from '../../middlewares/validateRequest';
import { GuestInfoVal } from './guestInfo.validation';
import auth from '../../middlewares/auth';

const router = express.Router();

router.get('/', GuestInfoControllers.getGuestInfo);

router.put(
  '/',
  auth(),
  validateRequest(GuestInfoVal.updateGuestInfo),
  GuestInfoControllers.updateGuestInfo,
);

export const GuestInfoRoutes = router;
