import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const generateToken = (user: any) => {
  return jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

export const verifyToken = (token: string) => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded;
  } catch (error) {
    throw new Error('Invalid token');
  }
};
