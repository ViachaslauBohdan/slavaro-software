import { describe, expect, it } from "vitest"
import { formatPlainTextMessage, parseContactPayload } from "@/lib/contact"
import { site } from "@/lib/site-content"

const validPayload = {
  name: "Jane Founder",
  email: "jane@startup.com",
  company: "Startup Inc",
  service: "build-mvp",
  message: "We need help shipping our MVP before fundraising.",
}

describe("parseContactPayload", () => {
  it("accepts valid contact submissions", () => {
    const result = parseContactPayload(validPayload)
    expect(result.success).toBe(true)
    if (result.success) {
      expect(result.data.company).toBe("Startup Inc")
    }
  })

  it("rejects invalid email addresses", () => {
    const result = parseContactPayload({ ...validPayload, email: "not-an-email" })
    expect(result.success).toBe(false)
  })

  it("rejects messages that are too short", () => {
    const result = parseContactPayload({ ...validPayload, message: "Too short" })
    expect(result.success).toBe(false)
  })
})

describe("formatPlainTextMessage", () => {
  it("includes branding and submitted fields", () => {
    const message = formatPlainTextMessage(validPayload)

    expect(message).toContain(site.name)
    expect(message).toContain("Jane Founder")
    expect(message).toContain("jane@startup.com")
    expect(message).toContain("Startup Inc")
    expect(message).toContain("build-mvp")
  })
})
