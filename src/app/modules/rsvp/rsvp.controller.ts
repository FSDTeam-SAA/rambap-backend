import { Request, Response } from 'express';
import { RsvpServices } from './rsvp.service';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';

const createRsvp = catchAsync(async (req: Request, res: Response) => {
  const language = (req.query.lang as string) || 'english';
  const result = await RsvpServices.createRsvp(req.body, language);

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'RSVP submitted successfully',
    data: result,
  });
});

const getRsvps = catchAsync(async (req: Request, res: Response) => {
  const language = (req.query.lang as string) || 'english';
  const result = await RsvpServices.getRsvps(language);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'RSVP list retrieved successfully',
    data: result,
  });
});

export const RsvpControllers = {
  createRsvp,
  getRsvps,
};
