import { NextFunction, Request, Response } from 'express';
import { Secret } from 'jsonwebtoken';
import AppError from '../error/appError';
import config from '../config';
import { jwtHelpers } from '../helper/jwtHelpers';

const auth = () => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = req.headers.authorization?.split(' ')[1];

      if (!token) throw new AppError(401, 'You are not authorized');

      jwtHelpers.verifyToken(token, config.jwt.accessTokenSecret as Secret);

      next();
    } catch (error) {
      next(error);
    }
  };
};

export default auth;
