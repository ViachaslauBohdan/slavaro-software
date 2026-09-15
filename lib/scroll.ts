export function scrollToId(id: string) {
  const element = document.getElementById(id)
  if (!element) return

  const headerOffset = 80
  const top = element.getBoundingClientRect().top + window.scrollY - headerOffset
  window.scrollTo({ top, behavior: "smooth" })
}
