import { contact } from '../../data/contact'
import { getWhatsAppLink } from '../../utils/whatsapp'

function SiteFooter() {
  const whatsappLink = getWhatsAppLink('Olá! Gostaria de saber mais sobre os produtos da Lure Aromas.')

  return (
    <footer id="contato" className="relative overflow-hidden bg-lure-forest px-5 pb-8 pt-10 text-[#f8f4ec] sm:px-8 sm:pb-10 sm:pt-12">
      <div className="pointer-events-none absolute -bottom-28 -right-24 size-72 rounded-full border border-[#caa870]/15 shadow-[0_0_0_24px_rgba(202,168,112,.035),0_0_0_50px_rgba(202,168,112,.025)]" />
      <div className="relative mx-auto grid max-w-[1100px] grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
        <div className="sm:col-span-2 lg:col-span-1">
          <a href="#inicio" className="inline-block w-[74px]" aria-label="Lure Aromas, voltar ao início"><img className="w-full" src="/images/logo_lure.png" alt="Lure Aromas" /></a>
          <p className="mt-4 max-w-[250px] text-[12px] leading-relaxed text-[#fffcf5]/70">Aromas e cuidados para deixar cada momento mais especial.</p>
        </div>
        <div><h2 className="font-serif text-lg text-[#ead7b7]">Visite-nos</h2><p className="mt-3 text-[12px] leading-relaxed text-[#fffcf5]/75">{contact.address}</p></div>
        <div>
          <h2 className="font-serif text-lg text-[#ead7b7]">Fale com a gente</h2>
          {contact.email ? <a className="mt-3 inline-block text-[12px] text-[#fffcf5]/75 transition hover:text-white" href={`mailto:${contact.email}`}>{contact.email}</a> : <p className="mt-3 text-[12px] text-[#fffcf5]/55">Adicionar e-mail de contato</p>}
          <a className="mt-3 flex w-fit items-center gap-2 rounded-sm border border-[#c6aa7b]/50 px-3 py-2 text-[11px] text-[#ecd9b8] transition hover:bg-white/10" href={whatsappLink} target="_blank" rel="noreferrer">Conversar pelo WhatsApp <span aria-hidden="true">↗</span></a>
        </div>
        <div>
          <h2 className="font-serif text-lg text-[#ead7b7]">Acompanhe</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {contact.instagramUrl ? <a className="rounded-sm border border-white/15 px-3 py-2 text-[11px] text-[#fffcf5]/75 hover:border-[#c6aa7b]/60 hover:text-white" href={contact.instagramUrl} target="_blank" rel="noreferrer">Instagram ↗</a> : <span className="rounded-sm border border-white/10 px-3 py-2 text-[11px] text-[#fffcf5]/50">Instagram · adicionar perfil</span>}
            {contact.facebookUrl ? <a className="rounded-sm border border-white/15 px-3 py-2 text-[11px] text-[#fffcf5]/75 hover:border-[#c6aa7b]/60 hover:text-white" href={contact.facebookUrl} target="_blank" rel="noreferrer">Facebook ↗</a> : <span className="rounded-sm border border-white/10 px-3 py-2 text-[11px] text-[#fffcf5]/50">Facebook · adicionar perfil</span>}
          </div>
        </div>
      </div>
      <div className="relative mx-auto mt-9 max-w-[1100px] border-t border-[#c2a16a]/25 pt-5 text-center text-[10px] text-[#fffcf5]/45">© {new Date().getFullYear()} Lure Aromas · Feito com carinho para celebrar.</div>
    </footer>
  )
}

export default SiteFooter
