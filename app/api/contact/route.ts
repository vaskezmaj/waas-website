import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const TO_EMAIL = process.env.CONTACT_EMAIL ?? "hello@formio.biz";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, trade, city, message, _honeypot } = body;

    // Honeypot check — bots fill hidden fields, humans don't
    if (_honeypot) {
      return NextResponse.json({ success: true }); // silent reject
    }

    // Basic validation
    if (!name?.trim() || !email?.trim() || !trade || !city?.trim() || !message?.trim()) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    await resend.emails.send({
      from: "Formio Contact Form <noreply@formio.biz>",
      to: [TO_EMAIL],
      replyTo: email,
      subject: `New lead: ${trade} contractor in ${city} - ${name}`,
      html: `
        <h2 style="font-family: sans-serif; color: #071841;">New Website Request</h2>
        <table style="font-family: sans-serif; font-size: 14px; border-collapse: collapse; width: 100%;">
          <tr><td style="padding: 8px; font-weight: bold; color: #374151;">Name</td><td style="padding: 8px;">${name}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold; color: #374151;">Email</td><td style="padding: 8px;"><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="padding: 8px; font-weight: bold; color: #374151;">Trade</td><td style="padding: 8px;">${trade}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold; color: #374151;">City</td><td style="padding: 8px;">${city}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold; color: #374151;">Message</td><td style="padding: 8px; white-space: pre-wrap;">${message}</td></tr>
        </table>
        <p style="font-family: sans-serif; font-size: 12px; color: #9CA3AF; margin-top: 24px;">
          Reply directly to this email to respond to ${name}.
        </p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[contact route error]", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
