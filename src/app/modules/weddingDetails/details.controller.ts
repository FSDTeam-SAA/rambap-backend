import { Request, Response } from 'express';
import { DetailsServices } from './details.service';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import AppError from '../../error/appError';

// Program Controllers
const getProgram = catchAsync(async (req: Request, res: Response) => {
  const result = await DetailsServices.getProgram();
  if (!result) throw new AppError(404, 'Data not found');

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Program retrieved',
    data: result,
  });
});

const updateProgram = catchAsync(async (req: Request, res: Response) => {
  const result = await DetailsServices.updateProgram(req.body);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Program updated',
    data: result,
  });
});

// Menu Controllers
const getMenu = catchAsync(async (req: Request, res: Response) => {
  const result = await DetailsServices.getMenu();
  if (!result) throw new AppError(404, 'Data not found');

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Menu retrieved',
    data: result,
  });
});

const updateMenu = catchAsync(async (req: Request, res: Response) => {
  const result = await DetailsServices.updateMenu(req.body);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Menu updated',
    data: result,
  });
});

export const DetailsControllers = {
  getProgram,
  updateProgram,
  getMenu,
  updateMenu,
};
