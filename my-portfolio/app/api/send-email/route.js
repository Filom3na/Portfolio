import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  console.log('API route hit, method:', req.method);

  if (req.method === 'POST') {
    console.log('Received POST request');
    const { firstname, lastname, email, phone, message } = req.body;
    
    console.log('Received form data:', { firstname, lastname, email, phone, message });

    // Create a transporter
    let transporter;
    try {
      transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // Use SSL
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      console.log('Transporter created successfully');
    } catch (error) {
      console.error('Error creating transporter:', error);
      return res.status(500).json({ message: 'Error creating email transporter', error: error.message });
    }

    try {
      console.log('Attempting to send email...');
      // Send email
      const info = await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: "filomenamurgo@gmail.com",
        subject: "New Contact Form Submission",
        text: `
          Name: ${firstname} ${lastname}
          Email: ${email}
          Phone: ${phone}
          Message: ${message}
        `,
      });

      console.log('Email sent successfully:', info.messageId);
      res.status(200).json({ message: 'Email sent successfully', messageId: info.messageId });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ 
        message: 'Error sending email', 
        error: error.message,
        stack: error.stack,
        config: {
          host: "smtp.gmail.com",
          port: 465,
          secure: true,
          auth: {
            user: process.env.EMAIL_USER,
            pass: 'REDACTED'
          }
        }
      });
    }
  } else {
    console.log(`Method ${req.method} Not Allowed`);
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }
}