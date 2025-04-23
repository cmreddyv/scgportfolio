import nodemailer from 'nodemailer';
import { GuestbookEntry } from '@shared/schema';


// Create a transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "cmrscg25@gmail.com",
    pass: "Scentre@2025",
  },
});

/**
 * Send a notification email when a new guestbook entry is added
 * @param entry The guestbook entry that was added
 */
export async function sendGuestbookNotification(entry: GuestbookEntry): Promise<boolean> {
  // If email credentials are not set, return false
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
    console.warn("Cannot send email: missing credentials");
    return false;
  }

  try {
    // Send mail with defined transport object
    const info = await transporter.sendMail({
      from: `"Farewell Website" <${process.env.EMAIL_USER}>`,
      to: "cmreddy.v@gmail.com", // Recipient email
      subject: "New Guestbook Entry ✨",
      text: `
Someone left a message in your guestbook!

Name: ${entry.name}
Message: ${entry.message}
Date: ${new Date(entry.createdAt).toLocaleString()}
      `,
      html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
  <h2 style="color: #4a5568; text-align: center;">New Guestbook Entry ✨</h2>
  <p style="color: #2d3748; font-size: 16px;">Someone left a message in your farewell guestbook!</p>
  
  <div style="background-color: #f7fafc; padding: 15px; border-radius: 5px; margin-top: 20px;">
    <p style="margin: 5px 0;"><strong>Name:</strong> ${entry.name}</p>
    <p style="margin: 5px 0;"><strong>Message:</strong> ${entry.message}</p>
    <p style="margin: 5px 0;"><strong>Date:</strong> ${new Date(entry.createdAt).toLocaleString()}</p>
  </div>
  
  <p style="color: #718096; font-size: 14px; text-align: center; margin-top: 20px;">
    This is an automated notification from your farewell website.
  </p>
</div>
      `,
    });

    console.log("Email notification sent successfully:", info.messageId);
    return true;
  } catch (error) {
    console.error("Error sending email notification:", error);
    return false;
  }
}
