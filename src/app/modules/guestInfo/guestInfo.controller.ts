import { Request, Response } from 'express';
import { GuestInfoServices } from './guestInfo.service';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import AppError from '../../error/appError';

const getGuestInfo = catchAsync(async (req: Request, res: Response) => {
  const language = (req.query.lang as string) || 'english';
  const result = await GuestInfoServices.getGuestInfo(language);

  if (!result) {
    throw new AppError(404, 'Guest info not found');
  }

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Guest info retrieved successfully',
    data: result,
  });
});

const updateGuestInfo = catchAsync(async (req: Request, res: Response) => {
  const language = (req.query.lang as string) || 'english';
  const result = await GuestInfoServices.updateGuestInfo(req.body, language);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Guest info updated successfully',
    data: result,
  });
});

export const GuestInfoControllers = {
  getGuestInfo,
  updateGuestInfo,
};
