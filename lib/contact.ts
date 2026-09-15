import { z } from "zod"
import { site } from "@/lib/site-content"

export const contactSchema = z.object({
  name: z.string().trim().min(2).max(100),
  phone: z.string().trim().max(50).optional().default(""),
  email: z.string().trim().email(),
  company: z.string().trim().max(150).optional().default(""),
  service: z.string().trim().min(1).max(100),
  message: z.string().trim().min(10).max(2000),
})

export type ContactPayload = z.infer<typeof contactSchema>

export function formatPlainTextMessage(input: ContactPayload) {
  return [
    `New project inquiry from ${site.name}:`,
    "",
    `Name: ${input.name}`,
    `Email: ${input.email}`,
    `Company: ${input.company || "-"}`,
    `Phone: ${input.phone || "-"}`,
    `Need: ${input.service}`,
    "",
    "Message:",
    input.message,
  ].join("\n")
}

export function parseContactPayload(payload: unknown) {
  return contactSchema.safeParse(payload)
}
