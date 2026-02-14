import { Request, Response } from 'express';
import { EventServices } from './event.service';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import AppError from '../../error/appError';

const getEvent = catchAsync(async (req: Request, res: Response) => {
  const language = (req.query.lang as string) || 'english';
  const result = await EventServices.getEvent(language);

  if (!result) {
    throw new AppError(404, 'Event section data not found');
  }

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Event section retrieved successfully',
    data: result,
  });
});

const updateEvent = catchAsync(async (req: Request, res: Response) => {
  const language = (req.query.lang as string) || 'english';
  const result = await EventServices.updateEvent(req.body, language);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Event section updated successfully',
    data: result,
  });
});

export const EventControllers = {
  getEvent,
  updateEvent,
};
