import { Request, Response } from 'express';
import { FooterServices } from './footer.service';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import AppError from '../../error/appError';

const getFooter = catchAsync(async (req: Request, res: Response) => {
  const result = await FooterServices.getFooter();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Footer content retrieved successfully',
    data: result,
  });
});

const updateFooter = catchAsync(async (req: Request, res: Response) => {
  const result = await FooterServices.updateFooter(req.body);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Footer content updated successfully',
    data: result,
  });
});

export const FooterControllers = {
  getFooter,
  updateFooter,
};
