import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function scrollToSection(id: string): void {
  const element = document.getElementById(id)
  if (element) {
    const navbarHeight = 80 // Approximate height of the navbar
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - navbarHeight
    
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    })
  }
}
