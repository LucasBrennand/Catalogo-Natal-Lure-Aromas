import { categories } from '../../data/catalog'
import type { ProductCategory } from '../../types/product'

type MobileCategoryFiltersProps = {
  category: ProductCategory
  onCategoryChange: (category: ProductCategory) => void
}

function MobileCategoryFilters({ category, onCategoryChange }: MobileCategoryFiltersProps) {
  return (
    <div className="flex gap-1 overflow-x-auto pb-[3px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:hidden" role="group" aria-label="Filtrar produtos por categoria">
      {categories.map((item) => (
        <button key={item} type="button" className={`shrink-0 rounded-[3px] border px-[11px] py-[9px] text-[11px] transition-colors sm:px-[13px] ${category === item ? 'border-lure-forest bg-lure-forest text-white' : 'border-transparent text-[#79756e] hover:bg-[#f5f0e8] hover:text-[#81653d]'}`} onClick={() => onCategoryChange(item)} aria-pressed={category === item}>
          {item === 'Todos' ? 'Todos os presentes' : item}
        </button>
      ))}
    </div>
  )
}

export default MobileCategoryFilters
