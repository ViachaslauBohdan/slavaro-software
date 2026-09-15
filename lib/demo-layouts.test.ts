import { describe, expect, it } from "vitest"
import {
  ALL_DEMO_LANDINGS,
  DEMO_LAYOUT_LABELS,
  getIndustryDemoLandings,
  getServiceDemoLandings,
  type DemoLayout,
} from "@/lib/demo-landings"

describe("demo layouts", () => {
  it("assigns every demo a known layout system", () => {
    const allowed = new Set(Object.keys(DEMO_LAYOUT_LABELS))
    for (const demo of ALL_DEMO_LANDINGS) {
      expect(allowed.has(demo.layout)).toBe(true)
      expect(demo.layout).toBeTruthy()
    }
  })

  it("spreads industries across all three systems", () => {
    const layouts = new Set(getIndustryDemoLandings().map((d) => d.layout))
    expect(layouts).toEqual(new Set<DemoLayout>(["editorial", "product", "kinetic"]))
  })

  it("maps services to product or kinetic only", () => {
    for (const demo of getServiceDemoLandings()) {
      expect(["product", "kinetic"]).toContain(demo.layout)
    }
  })
})
