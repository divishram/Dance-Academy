import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
})

export const sendBookingConfirmation = async (to: string, name: string, classType: string) => {
    const mailOptions = {
        from: `"Divish Dance Academy" <${process.env.EMAIL_USER}>`,
        to,
        subject: "Booking Confirmation",
        html: `
        <h2>Dear ${name}</h2>
        <p>Thank you for booking a <strong>${classType}</strong> class with us.</p>
        <p>We look forward to dancing with you!</p>
        `
    };
    await transporter.sendMail(mailOptions);
    
}