import { Schema, model } from 'mongoose';
import bcrypt from 'bcryptjs';
import config from '../../config';
import { IUser } from './user.interface';
import { userRole } from './user.constant';

const userSchema = new Schema<IUser>(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      select: 0,
    },
    // role: {
    //   type: String,
    //   enum: Object.keys(userRole),
    //   default: userRole.client,
    //   select: 0,
    // },
    otp: {
      type: String,
      select: 0,
    },
    otpExpires: {
      type: Date,
      select: 0,
    },
  },
  {
    timestamps: true,
  },
);

// Password Hashing Middleware
userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(
      this.password,
      Number(config.bcryptSaltRounds),
    );
  }
  next();
});

export const User = model<IUser>('User', userSchema);
