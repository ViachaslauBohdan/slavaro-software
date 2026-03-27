import { Button } from "@/components/ui/button"

export function CTA() {
  return (
    <section className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 lg:p-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl text-balance">
            You already have enough to stress about. Your software shouldn&apos;t be part of it.
          </h2>
          <p className="mt-6 text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Get the right team, the right tech, the right results, all in one partnership built to last.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4 flex-wrap">
            <Button size="lg" variant="secondary" className="px-8 py-6 text-base">
              Start a conversation
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-6 text-base bg-transparent text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10 hover:text-primary-foreground">
              View pricing
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
