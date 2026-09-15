import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ROUTES } from "@/lib/seo/routes"

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main-content" className="mx-auto max-w-6xl px-5 lg:px-8 py-32 text-center">
        <h1 className="text-3xl font-bold">Page not found</h1>
        <p className="mt-4 text-muted-foreground">
          The page you are looking for does not exist or has moved.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
          <Link href="/" className="text-foreground hover:underline underline-offset-4">
            Home
          </Link>
          <Link href={ROUTES.contact} className="text-foreground hover:underline underline-offset-4">
            Contact
          </Link>
          <Link
            href={ROUTES.mvpDevelopment}
            className="text-foreground hover:underline underline-offset-4"
          >
            MVP development
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
