import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, message } = body;

        // Validate
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "All fields are required" },
                { status: 400 }
            );
        }

        // In production, you can integrate with:
        // - Resend (https://resend.com) for email delivery
        // - Nodemailer for SMTP-based email
        // - A database (e.g., Supabase, MongoDB) to store submissions
        //
        // For now, we log the submission and return success.
        // This proves the backend route works end-to-end.

        console.log("📬 New contact submission:", { name, email, message });

        return NextResponse.json(
            { success: true, message: "Message received successfully!" },
            { status: 200 }
        );
    } catch {
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
