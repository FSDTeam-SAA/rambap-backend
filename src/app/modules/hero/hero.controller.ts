import { Request, Response } from 'express';
import { HeroServices } from './hero.service';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import AppError from '../../error/appError';
import { fileUploader } from '../../helper/fileUploder';

const getHero = catchAsync(async (req: Request, res: Response) => {
  const language = (req.query.lang as string) || 'english';

  const result = await HeroServices.getHero(language);

  if (!result) {
    throw new AppError(404, 'Hero section data not found');
  }

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Hero section retrieved successfully',
    data: result,
  });
});

const updateHero = catchAsync(async (req: Request, res: Response) => {
  const language = (req.query.lang as string) || 'english';

  if (req.file) {
    const uploadResult = await fileUploader.uploadToCloudinary(req.file);
    req.body.videoUrl = uploadResult.url;
  }

  const result = await HeroServices.updateHero(req.body, language);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Hero section updated successfully',
    data: result,
  });
});

export const HeroControllers = {
  getHero,
  updateHero,
};
