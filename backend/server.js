const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Root Route for Testing
app.get('/', (req, res) => {
    res.send('Backend Server is Running! 🚀');
});

// Transporter Setup
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Contact Endpoint
app.post('/api/contact', async (req, res) => {
    const { name, email, subject, message } = req.body;
    
    console.log('Sending contact message to:', process.env.EMAIL_USER);
    
    const mailOptions = {
        from: `"${name}" <${process.env.EMAIL_USER}>`, // Displays sender name but uses authenticated mail to avoid spam filters
        to: process.env.EMAIL_USER,
        replyTo: email, // Extremely important: Clicking "Reply" in inbox will now default to the sender's mail
        subject: `📬 Portfolio Inquiry: ${subject || 'New Message'}`,
        html: `
            <div style="font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f1f5f9; padding: 60px 20px; color: #0f172a; line-height: 1.6;">
                <div style="max-width: 580px; margin: 0 auto; background-color: #ffffff; border-radius: 20px; overflow: hidden; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);">
                    
                    <!-- Premium Header -->
                    <div style="background-color: #0f172a; padding: 40px 30px; text-align: left; position: relative;">
                        <p style="color: #6366f1; font-weight: 700; font-size: 14px; text-transform: uppercase; letter-spacing: 0.1em; margin: 0 0 10px 0;">New Incoming Message</p>
                        <h1 style="margin: 0; font-size: 26px; font-weight: 800; color: #ffffff; letter-spacing: -0.02em;">You have a new inquiry!</h1>
                    </div>
                    
                    <!-- Main Body -->
                    <div style="padding: 40px 35px;">
                        
                        <!-- Sender Card -->
                        <div style="margin-bottom: 35px; padding-bottom: 25px; border-bottom: 1px solid #e2e8f0;">
                            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                                <tr>
                                    <td>
                                        <p style="font-size: 13px; font-weight: 700; color: #64748b; margin: 0 0 8px 0; text-transform: uppercase;">From</p>
                                        <p style="font-size: 18px; font-weight: 700; color: #0f172a; margin: 0;">${name}</p>
                                        <p style="font-size: 15px; color: #4f46e5; margin: 2px 0 0 0;">${email}</p>
                                    </td>
                                </tr>
                            </table>
                        </div>
                        
                        <!-- Content Card -->
                        <div style="margin-bottom: 40px;">
                            <div style="background-color: #f8fafc; padding: 25px; border-radius: 12px; border: 1px solid #e2e8f0;">
                                <p style="font-size: 13px; font-weight: 700; color: #64748b; margin: 0 0 10px 0; text-transform: uppercase;">Message Source: ${subject || 'Portfolio Contact'}</p>
                                <div style="font-size: 16px; color: #334155; white-space: pre-wrap; line-height: 1.8;">${message}</div>
                            </div>
                        </div>
                        
                        <!-- ACTION BUTTON -->
                        <div style="text-align: center; margin-top: 10px;">
                            <a href="mailto:${email}?subject=RE: ${subject || 'Portfolio Inquiry'}" 
                               style="display: inline-block; background-color: #4f46e5; color: #ffffff; padding: 18px 45px; border-radius: 14px; font-size: 16px; font-weight: 700; text-decoration: none; box-shadow: 0 10px 15px -3px rgba(79, 70, 229, 0.4); transition: background-color 0.2s ease;">
                                Reply Directly
                            </a>
                            <p style="margin: 15px 0 0 0; font-size: 13px; color: #94a3b8;">Click the button to open your default mail app.</p>
                        </div>

                    </div>
                    
                    <!-- Minimal Footer -->
                    <div style="background-color: #f8fafc; padding: 25px 35px; text-align: center;">
                        <p style="margin: 0; font-size: 12px; color: #64748b; font-weight: 500;">
                            Received via Portfolio Contact • ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', dateStyle: 'long', timeStyle: 'short' })}
                        </p>
                    </div>
                </div>
            </div>
        `
    };

    // Respond immediately to the frontend to keep it snappy.
    res.status(200).json({ success: true, message: 'Message processing initiated!' });
    
    // Background email sending
    transporter.sendMail(mailOptions)
        .then(info => {
            console.log('✅ Email sent successfully:', info.messageId);
        })
        .catch(error => {
            console.error('❌ Background Nodemailer Error:', error);
        });
});

if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}

module.exports = app;
