import { NextResponse } from "next/server"
import { formatPlainTextMessage, parseContactPayload } from "@/lib/contact"
import { site } from "@/lib/site-content"

async function sendTelegramNotification(text: string) {
  const token = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID

  if (!token || !chatId) {
    throw new Error("Telegram credentials are missing")
  }

  const url = `https://api.telegram.org/bot${token}/sendMessage`
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text,
    }),
  })

  if (!response.ok) {
    const errorText = await response.text()
    throw new Error(`Telegram send failed: ${response.status} ${errorText}`)
  }
}

async function sendEmailNotification(text: string, replyTo: string) {
  const resendApiKey = process.env.RESEND_API_KEY
  const to = process.env.CONTACT_TO_EMAIL
  const from = process.env.CONTACT_FROM_EMAIL

  if (!resendApiKey || !to || !from) {
    throw new Error("Resend credentials are missing")
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: replyTo,
      subject: `New project inquiry — ${site.name}`,
      text,
      html: `<pre style="font-family:Arial,Helvetica,sans-serif;white-space:pre-wrap">${text}</pre>`,
    }),
  })

  if (!response.ok) {
    const errorText = await response.text()
    throw new Error(`Email send failed: ${response.status} ${errorText}`)
  }
}

export async function POST(request: Request) {
  try {
    const payload = await request.json()
    const parsed = parseContactPayload(payload)

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid form data", issues: parsed.error.flatten() },
        { status: 400 }
      )
    }

    const message = formatPlainTextMessage(parsed.data)

    const [emailResult, telegramResult] = await Promise.allSettled([
      sendEmailNotification(message, parsed.data.email),
      sendTelegramNotification(message),
    ])

    const failedChannels: string[] = []
    if (emailResult.status === "rejected") failedChannels.push("email")
    if (telegramResult.status === "rejected") failedChannels.push("telegram")

    if (failedChannels.length > 0) {
      return NextResponse.json(
        {
          error: `Failed to send to: ${failedChannels.join(", ")}`,
        },
        { status: 500 }
      )
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("Contact request error:", error)
    return NextResponse.json(
      { error: "Could not process request" },
      { status: 500 }
    )
  }
}
