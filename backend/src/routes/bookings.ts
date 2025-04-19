import { Router } from "express";
import {check} from 'express-validator';
import { bookClass } from "../controllers/bookings";

const router = Router();

router.post(
    '/',
    [
        check('name')
            .trim()
            .notEmpty()
            .withMessage('Name is required')
            .isLength({max: 100})
            .withMessage('Name must be less than 100 characters')
            .escape(),
        
        check('email')
            .trim()
            .notEmpty()
            .withMessage('Email is required')
            .isEmail()
            .withMessage('Invalid email format')
            .normalizeEmail(),
        
        check('type')
            .trim()
            .notEmpty()
            .withMessage('Class type is required')
            .isIn(['bollywood', 'persian', 'kurdish'])
            .withMessage('Invalid class type')
            .escape(),
    ],
    bookClass
);

export default router;