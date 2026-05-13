import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, trade, city, message, _honeypot } = body;

  if (_honeypot) {
    return NextResponse.json({ success: true });
  }

  if (!name?.trim() || !email?.trim() || !trade || !city?.trim() || !message?.trim()) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
  }

  // TODO: wire up CRM integration
  return NextResponse.json({ success: true });
}
