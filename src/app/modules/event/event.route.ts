import express from 'express';
import { EventControllers } from './event.controller';
import validateRequest from '../../middlewares/validateRequest';
import { EventValidation } from './event.validation';
import auth from '../../middlewares/auth';

const router = express.Router();

router.get('/', EventControllers.getEvent);

router.put(
  '/',
  auth(),
  validateRequest(EventValidation.updateEventValidationSchema),
  EventControllers.updateEvent,
);

export const EventRoutes = router;
