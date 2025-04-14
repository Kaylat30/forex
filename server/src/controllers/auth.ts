import bcrypt from 'bcrypt';
import User from '../models/User.js';
import passport from 'passport';
import { Request, Response, NextFunction } from 'express';
import { Document } from "mongoose";

interface UserDocument extends Document {
  firstname: string;
  lastname: string; 
  email: string;
  password: string;
}


//register user
export const register = async (req: Request, res: Response, next: NextFunction) => {
  try {
      const { 
          firstname,
          lastname,
          email,
          password
      } = req.body;

      const salt = await bcrypt.genSalt();
      const passwordHash = await bcrypt.hash(password, salt); // encrypting password

      const newUser = new User({
          firstname,
          lastname,
          email,
          password: passwordHash // we store the encypted password when new user registers
      });

      const savedUser = await newUser.save();
      res.setHeader('Content-Type', 'application/json');
      res.status(201).json({ message: "User registered successfully",user: savedUser});
  } catch (err) {
      // Send an error response with the error message
      res.status(500).json({ error: err.message });
  }
};

// Logging in
export const login = (req: Request, res: Response, next: NextFunction) => {
  passport.authenticate('local', (err:any, user: UserDocument, info:any) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (!user) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    req.logIn(user, async (err) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }

      // const { password, ...user1 } = user.toObject();

      // res.cookie('name', JSON.stringify({ firstname: user1.name }), {
      //   maxAge: 60000,
      //   // secure: true,
      // });

      res.status(200).json({ success: true, message: 'Logged in successfully',firstname:user.firstname });
    });
  })(req, res, next);
};

export const logout = (req: Request, res: Response, next: NextFunction) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.status(200).json({ message: 'Logged out successfully' });
  });
};
