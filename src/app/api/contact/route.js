import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    await resend.emails.send({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: process.env.EMAIL),
        subject: `New message from ${name}`,
        reply_to: email,
        html: `
          <div style="font-family: 'Segoe UI', sans-serif; padding: 20px; background-color: #f9f9f9; border-radius: 10px;">
            <h2 style="color: #50C878; font-size: 24px; border-bottom: 1px solid #e0e0e0; padding-bottom: 10px;">📩 New Contact Message</h2>
            <div style="margin-top: 20px;">
              <p style="margin: 5px 0;"><strong>Name:</strong> ${name}</p>
              <p style="margin: 5px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #3b82f6;">${email}</a></p>
              <p style="margin-top: 20px;"><strong>Message:</strong></p>
              <div style="background: #fff; padding: 15px; border-left: 4px solid #50C878; border-radius: 6px; color: #333; margin-top: 5px;">
                ${message.replace(/\n/g, "<br/>")}
              </div>
            </div>
            <p style="margin-top: 30px; font-size: 12px; color: #999;">Sent from your portfolio contact form</p>
          </div>
        `,
      });

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }
}
