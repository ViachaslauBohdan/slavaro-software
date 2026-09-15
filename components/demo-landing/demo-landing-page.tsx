import type { DemoLanding } from "@/lib/demo-landings"
import { LuminaEditorial } from "@/components/demo-landing/layouts/lumina-editorial"
import { AtlasProduct } from "@/components/demo-landing/layouts/atlas-product"
import { VoltageKinetic } from "@/components/demo-landing/layouts/voltage-kinetic"

export function DemoLandingPage({ demo }: { demo: DemoLanding }) {
  switch (demo.layout) {
    case "editorial":
      return <LuminaEditorial demo={demo} />
    case "product":
      return <AtlasProduct demo={demo} />
    case "kinetic":
      return <VoltageKinetic demo={demo} />
    default:
      return <AtlasProduct demo={demo} />
  }
}
