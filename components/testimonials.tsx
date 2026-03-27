"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react"

const testimonials = [
  {
    name: "Paul Steckler",
    title: "Founder & Senior Partner, Ramp Catalyst",
    content: "We worked on leading-edge voice agent technology. They recently built an AI agent with Ph.D.-level research and development skills; the result was a breakthrough for that industry. The quality of their engineers is phenomenal. Their skill sets helped us secure important cutting-edge industry work. We may be selling a start-up that we built with them. We're expecting a 10x ROI if the sale goes through, which is significant for the minimal resources we put into it.",
    rating: 5
  },
  {
    name: "Attia Jamil",
    title: "Head of Delivery at Memrise",
    content: "Vention has provided us with a very good caliber of talent. They have excellent communication skills and are great collaborators. They have a great mindset of getting things done. When we have a brief, Vention constantly excels at understanding our needs and asking questions. They're efficient and meet our needs, which is very valuable.",
    rating: 5
  },
  {
    name: "Benjamin Maisano",
    title: "CTO at Mount Sinai",
    content: "Vention has provided very talented engineers across web UI, mobile, backend APIs, and system designs, to data integrations and beyond. Their staff integrated quickly and were dedicated to the internal teams throughout the relationship, acting as long-term partners in our strategic digital efforts.",
    rating: 5
  }
]

const platforms = [
  { name: "Clutch", rating: "4.9/5", reviews: "500+ reviews" },
  { name: "Gartner Peer Insights", rating: "4.8/5", reviews: "200+ reviews" },
  { name: "G2", rating: "4.7/5", reviews: "100+ reviews" }
]

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Client testimonials
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            The names behind our name
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto mb-16">
          <Card className="overflow-hidden">
            <CardContent className="p-8 lg:p-12">
              <Quote className="h-12 w-12 text-primary/20 mb-6" />
              
              <p className="text-lg lg:text-xl text-foreground leading-relaxed mb-8">
                &quot;{testimonials[activeIndex].content}&quot;
              </p>

              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonials[activeIndex].name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonials[activeIndex].title}
                  </p>
                </div>
                
                <div className="flex items-center gap-1">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full"
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Previous testimonial</span>
            </Button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === activeIndex ? "bg-primary" : "bg-border"
                  }`}
                >
                  <span className="sr-only">Go to testimonial {index + 1}</span>
                </button>
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full"
            >
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Next testimonial</span>
            </Button>
          </div>
        </div>

        {/* Platform Ratings */}
        <div className="text-center mb-8">
          <p className="text-muted-foreground mb-6">
            And our partners didn&apos;t stop at private thank-yous. Their public praise turned into top ratings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {platforms.map((platform) => (
            <Card key={platform.name} className="text-center">
              <CardContent className="p-6">
                <p className="font-semibold text-foreground mb-2">{platform.name}</p>
                <p className="text-2xl font-bold text-primary mb-1">{platform.rating}</p>
                <p className="text-sm text-muted-foreground">{platform.reviews}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center gap-4 mt-8">
          <Button variant="outline">Explore all Clutch reviews</Button>
          <Button variant="outline">Explore all Gartner reviews</Button>
        </div>
      </div>
    </section>
  )
}
