import express from 'express';
import { RsvpControllers } from './rsvp.controller';
import validateRequest from '../../middlewares/validateRequest';
import { RsvpVal } from './rsvp.validation';
import auth from '../../middlewares/auth';

const router = express.Router();

router.post(
  '/',
  validateRequest(RsvpVal.createRsvp),
  RsvpControllers.createRsvp,
);
router.get('/', auth(), RsvpControllers.getRsvps);

export const RsvpRoutes = router;
