import express from 'express';
import { GuestInfoControllers } from './guestInfo.controller';
import validateRequest from '../../middlewares/validateRequest';
import { GuestInfoVal } from './guestInfo.validation';
import auth from '../../middlewares/auth';
import { fileUploader } from '../../helper/fileUploder';

const router = express.Router();

router.get('/', GuestInfoControllers.getGuestInfo);

router.put(
  '/',
  auth(),
  fileUploader.upload.array('files'),
  validateRequest(GuestInfoVal.updateGuestInfo),
  GuestInfoControllers.updateGuestInfo,
);

export const GuestInfoRoutes = router;
