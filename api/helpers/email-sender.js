import ejs from 'ejs';
import { SMTPCONTACT, SMTPCAREERS} from '../../configs/constants';

const nodemailer = require('nodemailer');

const smtpTransportContact = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: SMTPCONTACT.EMAIL,
      pass: SMTPCONTACT.PASSWORD,
    },
  });
  const smtpTransportCareers= nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: SMTPCAREERS.EMAIL,
      pass: SMTPCAREERS.PASSWORD,
    },
  });
  
  const contactFormclient = async (email,name,message) => {
    
    
    const html = await ejs.renderFile(`${__dirname}/../templates/registermail.ejs`, {
        email,name,  message
    });
    const mailOptions = {
      from: `"Globactiv" <Hello@GLOBACTIV.LK>`,
      to: email,
      subject: 'Thank you !',
      html,
      attachments: [
        {
          filename:'image-1.png',
          path: `${__dirname}/../templates/images/image-1.png`,
          cid: 'image1', // same cid value as in the html img src
        },
  
        {
          filename: 'image-2.png',
          path: `${__dirname}/../templates/images/image-2.png`,
          cid: 'image2', // same cid value as in the html img src
        },
      ],
    };
    return smtpTransportContact.sendMail(mailOptions);
  };


  const contactForm = async (email,name, message) => {
    
    
    const html = await ejs.renderFile(`${__dirname}/../templates/registermailManager.ejs`, {
        email,name,message
    });
    const mailOptions = {
      from:  `"Globactiv" <Hello@GLOBACTIV.LK>`,
      to: "INFO@GLOBACTIV.LK",
      subject: 'New Inquiry !',
      html,
      attachments: [
        {
          filename: 'image-1.png',
          path: `${__dirname}/../templates/images/image-1.png`,
          cid: 'image1', // same cid value as in the html img src
        },
  
        {
          filename: 'image-2.png',
          path: `${__dirname}/../templates/images/image-2.png`,
          cid: 'image2', // same cid value as in the html img src
        },
      ],
    };
    return smtpTransportContact.sendMail(mailOptions);
  };









  const  careers = async (email,name, message) => {
    
  
    const html = await ejs.renderFile(`${__dirname}/../templates/newsletterclient.ejs`, {
      email,name, message
    });

    const mailOptions = {
      from: `"Globactiv" <Hello@GLOBACTIV.LK>`,
      to: email,
      subject: 'New Career inquiry!',
      html,
      attachments: [
        {
          filename: 'image-1.png',
          path: `${__dirname}/../templates/images/image-1.png`,
          cid: 'image1', // same cid value as in the html img src
        },
  
        {
          filename: 'image-2.png',
          path: `${__dirname}/../templates/images/image-2.png`,
          cid: 'image2', // same cid value as in the html img src
        },
      ],
    };
  
    return  smtpTransportCareers.sendMail(mailOptions);
  
  };

  const careersClient = async (email,name, message) => {
    
  
    const html = await ejs.renderFile(`${__dirname}/../templates/newsletterManager.ejs`, {
      email,name, message
    });
    const mailOptions = {
      from:  `"Globactiv" <Hello@GLOBACTIV.LK>`,
      to: "INFO@GLOBACTIV.LK",
      subject: 'Let the Journey Begin!',
      html,
      attachments: [
        {
          filename: 'image-1.png',
          path: `${__dirname}/../templates/images/image-1.png`,
          cid: 'image1', // same cid value as in the html img src
        },
  
        {
          filename: 'image-2.png',
          path: `${__dirname}/../templates/images/image-2.png`,
          cid: 'image2', // same cid value as in the html img src
        },
      ],
    };
  
    return  smtpTransportCareers.sendMail(mailOptions);
  
  };


  export {contactFormclient, contactForm, careers,careersClient};