import { useEffect, useState } from 'react'
import { getWhatsAppLink } from '../../utils/whatsapp'
import type { Product } from '../../types/product'

const galleryPositions = ['object-center', 'object-[center_38%]', 'object-[center_72%]']

type ProductDialogProps = {
  product: Product
  onClose: () => void
}

function ProductDialog({ product, onClose }: ProductDialogProps) {
  const [activeImage, setActiveImage] = useState(0)
  const message = `Olá! Tenho interesse no produto ${product.name} (${product.category}).`
  const whatsappLink = getWhatsAppLink(message)

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [onClose])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-[#17221c]/65 p-3 backdrop-blur-[3px] sm:p-6" role="dialog" aria-modal="true" aria-labelledby="product-dialog-title" onClick={(event) => { if (event.target === event.currentTarget) onClose() }}>
      <div className="animate-dialog-enter relative my-auto grid w-full max-w-[880px] overflow-hidden rounded-sm bg-[#fffdf9] shadow-2xl md:grid-cols-2">
        <button type="button" className="absolute right-3 top-3 z-20 grid size-9 place-items-center rounded-full bg-white/90 text-2xl leading-none text-[#605a4e] shadow-sm transition hover:bg-white" onClick={onClose} aria-label="Fechar detalhes">×</button>
        <div className="flex min-h-[310px] flex-col bg-[#f2eee5] p-3 sm:p-5 md:min-h-[500px]">
          <div className="relative min-h-0 flex-1 overflow-hidden bg-white/40">
            <img key={`${product.id}-${activeImage}`} className={`absolute inset-0 size-full object-cover ${galleryPositions[activeImage % galleryPositions.length]}`} src={product.images[activeImage]} alt={`${product.name}, foto ${activeImage + 1}`} />
            <span className="absolute bottom-3 right-3 rounded-full bg-white/85 px-3 py-1.5 text-[10px] text-[#78694f]">{activeImage + 1} / {product.images.length}</span>
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2">
            {product.images.map((image, index) => (
              <button key={`${image}-${index}`} type="button" onClick={() => setActiveImage(index)} aria-label={`Ver foto ${index + 1}`} aria-pressed={activeImage === index} className={`relative h-[66px] overflow-hidden border-2 transition sm:h-[78px] ${activeImage === index ? 'border-[#a78049]' : 'border-transparent opacity-70 hover:opacity-100'}`}>
                <img className={`size-full object-cover ${galleryPositions[index % galleryPositions.length]}`} src={image} alt="" />
              </button>
            ))}
          </div>
          <p className="mt-2 text-center text-[9px] text-[#938a7c]">Fotos ilustrativas · novas imagens em breve</p>
        </div>
        <div className="flex flex-col justify-center px-6 py-7 sm:px-9 sm:py-10">
          <span className="text-[9px] font-semibold uppercase tracking-[.18em] text-[#a5824f]">{product.category} <span className="px-1.5 text-[#c5a46d]">✳</span> Coleção de Natal</span>
          <h2 className="mb-3 mt-3 pr-7 font-serif text-[30px] font-medium leading-tight text-[#38352e] sm:text-[38px]" id="product-dialog-title">{product.name}</h2>
          <p className="text-[13px] leading-[1.8] text-[#79746b]">{product.description}</p>
          <div className="my-6 grid grid-cols-2 gap-3 border-y border-[#ece7de] py-4">
            <div><span className="block text-[9px] uppercase tracking-[.13em] text-[#a49e94]">Fragrância</span><span className="mt-1 block text-[12px] text-[#555047]">{product.scent}</span></div>
            <div><span className="block text-[9px] uppercase tracking-[.13em] text-[#a49e94]">Apresentação</span><span className="mt-1 block text-[12px] text-[#555047]">{product.size}</span></div>
          </div>
          <a className="flex min-h-12 items-center justify-center gap-2 bg-[#29392e] px-4 py-3 text-center text-[12px] font-medium text-white transition hover:bg-[#35483a]" href={whatsappLink} target="_blank" rel="noreferrer">Consultar pelo WhatsApp <span aria-hidden="true" className="text-base">↗</span></a>
          <p className="mt-3 text-center text-[10px] leading-relaxed text-[#9b958c]">Fale com a gente para saber mais sobre este presente.</p>
        </div>
      </div>
    </div>
  )
}

export default ProductDialog
