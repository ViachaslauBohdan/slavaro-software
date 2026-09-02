import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"
import { POST } from "@/app/api/contact/route"

const originalEnv = { ...process.env }

function makeRequest(body: unknown) {
  return new Request("http://localhost/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  })
}

describe("POST /api/contact", () => {
  beforeEach(() => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        text: async () => "",
      })
    )

    process.env.RESEND_API_KEY = "test-resend-key"
    process.env.CONTACT_TO_EMAIL = "contact@slavaro.com"
    process.env.CONTACT_FROM_EMAIL = "SLAVARO SOFTWARE <noreply@slavaro.com>"
    process.env.TELEGRAM_BOT_TOKEN = "telegram-token"
    process.env.TELEGRAM_CHAT_ID = "123456"
  })

  afterEach(() => {
    vi.unstubAllGlobals()
    process.env = { ...originalEnv }
  })

  it("returns 400 for invalid payloads", async () => {
    const response = await POST(
      makeRequest({
        name: "A",
        email: "invalid",
        service: "",
        message: "short",
      })
    )

    expect(response.status).toBe(400)
    await expect(response.json()).resolves.toMatchObject({
      error: "Invalid form data",
    })
  })

  it("returns 200 when notifications succeed", async () => {
    const response = await POST(
      makeRequest({
        name: "Jane Founder",
        email: "jane@startup.com",
        company: "Startup Inc",
        service: "build-mvp",
        message: "We need help shipping our MVP before fundraising.",
      })
    )

    expect(response.status).toBe(200)
    await expect(response.json()).resolves.toEqual({ ok: true })
    expect(fetch).toHaveBeenCalledTimes(2)
  })

  it("returns 500 when a notification channel fails", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: false,
        status: 500,
        text: async () => "provider error",
      })
    )

    const response = await POST(
      makeRequest({
        name: "Jane Founder",
        email: "jane@startup.com",
        service: "build-mvp",
        message: "We need help shipping our MVP before fundraising.",
      })
    )

    expect(response.status).toBe(500)
    await expect(response.json()).resolves.toMatchObject({
      error: expect.stringContaining("Failed to send to"),
    })
  })
})
