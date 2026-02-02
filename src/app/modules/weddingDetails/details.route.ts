import express from 'express';
import { DetailsControllers } from './details.controller';
import validateRequest from '../../middlewares/validateRequest';
import { DetailsVal } from './details.validation';
import auth from '../../middlewares/auth';
import { fileUploader } from '../../helper/fileUploder';

const router = express.Router();

// Program Routes
router.get('/program', DetailsControllers.getProgram);
router.put(
  '/program',
  auth(),
  fileUploader.upload.any(), // Allows files like "items[0][icon]"
  validateRequest(DetailsVal.updateProgram),
  DetailsControllers.updateProgram,
);

// Menu Routes
router.get('/menu', DetailsControllers.getMenu);
router.put(
  '/menu',
  auth(),
  validateRequest(DetailsVal.updateMenu),
  DetailsControllers.updateMenu,
);

export const DetailsRoutes = router;
