import { contact } from '../../data/contact'
import { getWhatsAppLink } from '../../utils/whatsapp'

function SiteFooter() {
  const whatsappLink = getWhatsAppLink('Olá! Gostaria de saber mais sobre os produtos da Lure Aromas.')

  return (
    <footer id="contato" className="relative overflow-hidden bg-lure-forest px-5 pb-8 pt-10 text-[#f8f4ec] sm:px-8 sm:pb-10 sm:pt-12">
      <div className="pointer-events-none absolute -bottom-28 -right-24 size-72 rounded-full border border-[#caa870]/15 shadow-[0_0_0_24px_rgba(202,168,112,.035),0_0_0_50px_rgba(202,168,112,.025)]" />
      <div className="relative mx-auto grid max-w-[1200px] grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-[1fr_1.8fr_1fr_1fr] lg:gap-8">
        <div className="sm:col-span-2 lg:col-span-1">
          <a href="#inicio" className="inline-block w-[74px]" aria-label="Lure Aromas, voltar ao início"><img className="w-full" src="/images/logo_lure.png" alt="Lure Aromas" /></a>
          <p className="mt-4 max-w-[250px] text-[12px] leading-relaxed text-[#fffcf5]/70">Aromas e cuidados para deixar cada momento mais especial.</p>
        </div>
        <div>
          <h2 className="font-serif text-lg text-[#ead7b7]">Nossos endereços</h2>
          <ul className="mt-3 space-y-4">
            {contact.locations.map((location) => (
              <li key={location.name}>
                <h3 className="text-[11px] font-semibold text-[#ead7b7]">{location.name}</h3>
                <p className="mt-1 break-words text-[11px] leading-relaxed text-[#fffcf5]/75">{location.address}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-serif text-lg text-[#ead7b7]">Fale com a gente</h2>
          {contact.email ? <a className="mt-3 inline-block text-[12px] text-[#fffcf5]/75 transition hover:text-white" href={`mailto:${contact.email}`}>{contact.email}</a> : <p className="mt-3 text-[12px] text-[#fffcf5]/55">Adicionar e-mail de contato</p>}
          <a className="mt-3 flex w-fit items-center gap-2 rounded-sm border border-[#c6aa7b]/50 px-3 py-2 text-[11px] text-[#ecd9b8] transition hover:bg-white/10" href={whatsappLink} target="_blank" rel="noreferrer">Conversar pelo WhatsApp <span aria-hidden="true">↗</span></a>
        </div>
        <div>
          <h2 className="font-serif text-lg text-[#ead7b7]">Acompanhe</h2>
          <div className="mt-3 flex gap-3">
            <a className="grid size-10 place-items-center rounded-full border border-white/20 text-[#ead7b7] transition hover:border-[#c6aa7b] hover:bg-white/10 hover:text-white" href={contact.instagramUrl} target="_blank" rel="noreferrer" aria-label="Instagram da Lure Aromas">
              <svg className="size-[18px]" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3.25" y="3.25" width="17.5" height="17.5" rx="5" stroke="currentColor" strokeWidth="1.6"/><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6"/><circle cx="17.7" cy="6.6" r="1.1" fill="currentColor"/></svg>
            </a>
            <a className="grid size-10 place-items-center rounded-full border border-white/20 text-[#ead7b7] transition hover:border-[#c6aa7b] hover:bg-white/10 hover:text-white" href={contact.facebookUrl} target="_blank" rel="noreferrer" aria-label="Facebook da Lure Aromas">
              <svg className="size-[18px] fill-current" viewBox="0 0 24 24" aria-hidden="true"><path d="M13.45 21v-8.2h2.76l.42-3.2h-3.18V7.56c0-.93.26-1.57 1.6-1.57h1.7V3.13c-.3-.04-1.32-.13-2.5-.13-2.48 0-4.18 1.52-4.18 4.3V9.6H7.26v3.2h2.8V21h3.4Z"/></svg>
            </a>
          </div>
        </div>
      </div>
      <div className="relative mx-auto mt-9 max-w-[1100px] border-t border-[#c2a16a]/25 pt-5 text-center text-[10px] text-[#fffcf5]/45">© {new Date().getFullYear()} Lure Aromas · Feito com carinho para celebrar.</div>
    </footer>
  )
}

export default SiteFooter
