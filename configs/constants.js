require('dotenv').config({ silent: true });

export const PORT = process.env.PORT || 5000;
export const ENV = process.env.NODE_ENV || 'development';
export const DOMAIN = process.env.DOMAIN || 'localhost:5000';


export const SMTPCONTACT = {
    EMAIL: process.env.SMTP_EMAIL || '',
    PASSWORD: process.env.SMTP_PASSWORD || '',
};
export const SMTPCAREERS = {
    EMAIL: process.env.SMTP_EMAIL || '',
    PASSWORD: process.env.SMTP_PASSWORD || '',
};
