import { categories } from '../../data/catalog'
import type { ProductCategory } from '../../types/product'

type CategoryFiltersProps = {
  category: ProductCategory
  isCategoriesOpen: boolean
  onCategoryChange: (category: ProductCategory) => void
  onToggle: () => void
}

function CategoryFilters({ category, isCategoriesOpen, onCategoryChange, onToggle }: CategoryFiltersProps) {
  return (
      <aside className={`hidden overflow-hidden transition-[width] duration-200 lg:block ${isCategoriesOpen ? 'w-[220px]' : 'w-[52px]'}`} aria-label="Categorias de produtos">
        <button type="button" className="flex h-10 w-full items-center justify-between gap-2 border-b border-[#e7e0d5] px-2 text-left text-[11px] font-semibold uppercase tracking-[.12em] text-[#786b58] hover:text-[#96713e]" onClick={onToggle} aria-expanded={isCategoriesOpen} aria-controls="desktop-category-list" aria-label={isCategoriesOpen ? 'Recolher categorias' : 'Expandir categorias'}>
          {isCategoriesOpen && <span>Categorias</span>}
          <svg className={`size-4 shrink-0 transition-transform ${isCategoriesOpen ? '' : 'rotate-180'}`} viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M12.5 4.5 7 10l5.5 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>
        <div id="desktop-category-list" className={isCategoriesOpen ? 'flex flex-col gap-1 pt-3' : 'hidden'} role="group" aria-label="Filtrar produtos por categoria">
          {categories.map((item) => (
            <button key={item} type="button" title={item === 'Todos' ? 'Todos os presentes' : item} className={`flex min-h-10 items-center gap-3 rounded-sm px-3 text-left text-[12px] transition-colors ${category === item ? 'bg-[#29392e] text-white' : 'text-[#79756e] hover:bg-[#f2eee5] hover:text-[#81653d]'}`} onClick={() => onCategoryChange(item)} aria-pressed={category === item}>
              <span aria-hidden="true" className={`w-4 text-center text-[13px] ${category === item ? 'text-[#d7ba87]' : 'text-[#b99b6a]'}`}>{item === 'Todos' ? '✧' : '✳'}</span>
              {isCategoriesOpen && <span>{item === 'Todos' ? 'Todos os presentes' : item}</span>}
            </button>
          ))}
        </div>
      </aside>
  )
}

export default CategoryFilters
