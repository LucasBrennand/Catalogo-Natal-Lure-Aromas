import { contact } from '../data/contact'

export function getWhatsAppLink(message: string) {
  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`
}
