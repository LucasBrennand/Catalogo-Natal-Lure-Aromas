import type { Product } from '../../types/product'

type ProductCardProps = {
  product: Product
  index: number
  onSelect: (product: Product) => void
}

function ProductCard({ product, index, onSelect }: ProductCardProps) {
  const toneClass = {
    rose: 'bg-[#f4eeeb]',
    sage: 'bg-[#eff1ea]',
    blue: 'bg-[#edf0ef]',
    gold: 'bg-[#f2eee5]',
  }[product.tone]

  return (
    <button type="button" className="animate-card-enter group min-w-0 overflow-hidden border border-[#eee9e1] bg-white text-left transition duration-200 hover:-translate-y-1 hover:shadow-[0_10px_24px_rgba(55,47,35,.085)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b58a52]" style={{ animationDelay: `${Math.min(index * 45, 300)}ms` }} onClick={() => onSelect(product)} aria-haspopup="dialog" aria-label={`Ver detalhes de ${product.name}`}>
      <div className={`relative flex h-[245px] items-center justify-center overflow-hidden min-[391px]:h-[clamp(145px,42vw,220px)] min-[701px]:h-[210px] min-[961px]:h-[224px] min-[1440px]:h-[250px] ${toneClass}`}>
        <span aria-hidden="true" className="absolute left-1/2 top-5 size-44 -translate-x-1/2 rounded-full border border-[#ae8e5d]/15" />
        <img className="relative size-full object-cover transition duration-500 group-hover:scale-[1.035]" src={product.image} alt={product.imageAlt} loading="lazy" />
        {product.featured && <span className="absolute left-[11px] top-[11px] flex items-center gap-[5px] bg-[#fffdf9]/95 px-2 py-1.5 text-[9px] text-[#80613a]"><span className="text-[#ba955b]">✦</span> Queridinho</span>}
        <span aria-hidden="true" className="absolute bottom-[9px] right-[13px] text-2xl text-white/85 drop-shadow">✳</span>
        <span className="absolute bottom-3 right-3 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-medium text-[#68563b] opacity-0 shadow-sm transition group-hover:opacity-100 group-focus-visible:opacity-100">Ver detalhes <span aria-hidden="true">↗</span></span>
      </div>
      <div className="p-[12px_11px_11px] sm:p-[15px_15px_13px]">
        <span className="text-[9px] font-semibold uppercase tracking-[.13em] text-[#a5824f]">{product.category}</span>
        <h3 className="mb-[5px] mt-1.5 font-serif text-[17px] font-medium leading-tight text-[#38352e] sm:text-[19px]">{product.name}</h3>
        <p className="min-h-[49px] text-[9px] leading-[1.55] text-[#858078] sm:min-h-[38px] sm:text-[10px]">{product.description}</p>
        <div className="mt-[10px] flex items-center justify-between gap-2 border-t border-[#f0ece6] pt-[10px] sm:mt-[14px]">
          <span className="flex min-w-0 items-center gap-1.5 overflow-hidden text-ellipsis whitespace-nowrap text-[9px] text-[#6e6a62] sm:text-[10px]"><span className="size-1.5 shrink-0 rounded-full bg-[#bb9b69]" />{product.scent}</span>
          <span className="shrink-0 text-[9px] text-[#a49e94]">{product.size}</span>
        </div>
      </div>
    </button>
  )
}

export default ProductCard
