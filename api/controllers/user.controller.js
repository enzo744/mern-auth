import User from '../models/user.model.js';
import {errorHandler} from '../utils/error.js';
import bcrypts from 'bcryptjs';

export const test = (req, res) => {
  res.json({
    message: "API is working!",
  });
};
