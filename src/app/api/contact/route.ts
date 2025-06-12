import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  const { name, email, phone, message } = await req.json();

  // Ensure required fields are present
  if (!name || !email || !phone || !message) {
    return NextResponse.json(
      { success: false, message: 'All fields are required.' },
      { status: 400 }
    );
  }

  // Create transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // your Gmail address
      pass: process.env.EMAIL_PASS, // Gmail App Password
    },
  });

  try {
    // Send mail
    await transporter.sendMail({
      from: `"Taughtlevel Contact" <${process.env.EMAIL_USER}>`,
      to: 'kingvic2553@gmail.com',
      subject: 'New Contact Form Submission',
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    return NextResponse.json({
      success: true,
      message: 'Email sent successfully.',
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send email.' },
      { status: 500 }
    );
  }
}
