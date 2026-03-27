import { Button } from "@/components/ui/button"

export function CTA() {
  return (
    <section className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 lg:p-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl text-balance">
            Ready to get more clients and save hours every week?
          </h2>
          <p className="mt-6 text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Let&apos;s discuss your landing page or automation project. 
            Book a free discovery call and see how we can help your business grow.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4 flex-wrap">
            <Button size="lg" variant="secondary" className="px-8 py-6 text-base">
              Book a Free Discovery Call
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-6 text-base bg-transparent text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10 hover:text-primary-foreground">
              View Our Work
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
