import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, category, message } = await request.json();

    if (!message || message.trim().length === 0) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      from: "LearnDari Feedback <onboarding@resend.dev>",
      to: "adeiltherealdeal@gmail.com",
      subject: `[LearnDari Feedback] ${category.charAt(0).toUpperCase() + category.slice(1)}${name ? ` from ${name}` : ""}`,
      text: [
        `Category: ${category}`,
        `Name: ${name || "Anonymous"}`,
        `Email: ${email || "Not provided"}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send feedback" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Feedback API error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
