import { Request, Response } from 'express';
import { DetailsServices } from './details.service';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import AppError from '../../error/appError';
import { fileUploader } from '../../helper/fileUploder';

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
  // 1. Parse 'items' if it is a string (Postman sends arrays as JSON strings in form-data)
  if (req.body.items && typeof req.body.items === 'string') {
    req.body.items = JSON.parse(req.body.items);
  }

  // 2. Handle Files (Icons)
  if (req.files && Array.isArray(req.files)) {
    const files = req.files as Express.Multer.File[];

    // Upload to Cloudinary
    const uploadPromises = files.map(async (file) => {
      const uploadRes = await fileUploader.uploadToCloudinary(file);
      return {
        fieldname: file.fieldname, // e.g., "items[0][icon]"
        url: uploadRes.url,
      };
    });

    const results = await Promise.all(uploadPromises);

    // 3. Assign URLs to correct item index
    results.forEach((item) => {
      // Regex to extract index: matches "items[0][icon]"
      const match = item.fieldname.match(/items\[(\d+)\]\[icon\]/);

      if (match && req.body.items) {
        const index = parseInt(match[1]!, 10);
        // Ensure the item exists at that index before assigning
        if (req.body.items[index]) {
          req.body.items[index].icon = item.url;
        }
      }
    });
  }

  const result = await DetailsServices.updateProgram(req.body);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Program updated successfully',
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
