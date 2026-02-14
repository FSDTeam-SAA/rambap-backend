import { Request, Response } from 'express';
import { FooterServices } from './footer.service';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';

const getFooter = catchAsync(async (req: Request, res: Response) => {
  const language = (req.query.lang as string) || 'english';
  const result = await FooterServices.getFooter(language);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Footer content retrieved successfully',
    data: result,
  });
});

const updateFooter = catchAsync(async (req: Request, res: Response) => {
  const language = (req.query.lang as string) || 'english';
  const result = await FooterServices.updateFooter(req.body, language);

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
