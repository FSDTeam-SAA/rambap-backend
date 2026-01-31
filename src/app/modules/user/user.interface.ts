import { userRole } from './user.constant';

export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: keyof typeof userRole; // 'admin' | 'client'
  otp?: string;
  otpExpires?: Date;
}
