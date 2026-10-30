import { useMemo, useState } from 'react'
import { catalogProducts } from '../../data/catalog'
import type { Product, ProductCategory } from '../../types/product'
import CatalogIntro from './CatalogIntro'
import CategoryFilters from './CategoryFilters'
import MobileCategoryFilters from './MobileCategoryFilters'
import ProductGrid from './ProductGrid'
import ProductSearch from './ProductSearch'

type CatalogSectionProps = {
  onSelectProduct: (product: Product) => void
}

function CatalogSection({ onSelectProduct }: CatalogSectionProps) {
  const [category, setCategory] = useState<ProductCategory>('Todos')
  const [query, setQuery] = useState('')
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(true)

  const visibleProducts = useMemo(() => catalogProducts.filter((product) => {
    const matchesCategory = category === 'Todos' || product.category === category
    const searchText = `${product.name} ${product.description} ${product.scent}`.toLocaleLowerCase('pt-BR')
    const matchesSearch = searchText.includes(query.toLocaleLowerCase('pt-BR').trim())
    return matchesCategory && matchesSearch
  }), [category, query])

  return (
    <section className="mx-auto min-h-[520px] max-w-[1440px] px-4 pb-[26px] pt-12 sm:px-7 sm:pt-[68px] lg:px-11" id="catalogo" aria-labelledby="catalog-title">
      <CatalogIntro />
      <div className="lg:grid lg:grid-cols-[auto_minmax(0,1fr)] lg:items-start lg:gap-6">
        <CategoryFilters
          category={category}
          isCategoriesOpen={isCategoriesOpen}
          onCategoryChange={setCategory}
          onToggle={() => setIsCategoriesOpen((open) => !open)}
        />
        <div className="min-w-0">
          <div className="flex flex-col-reverse gap-[13px] border-b border-[#ece7de] pb-5 sm:items-center sm:justify-between sm:gap-5 lg:flex-row lg:justify-end">
            <MobileCategoryFilters category={category} onCategoryChange={setCategory} />
            <ProductSearch query={query} onQueryChange={setQuery} />
          </div>
          <ProductGrid
            products={visibleProducts}
            category={category}
            isCategoriesOpen={isCategoriesOpen}
            onSelectProduct={onSelectProduct}
            onReset={() => { setCategory('Todos'); setQuery('') }}
          />
          <div className="mt-[38px] flex items-center justify-center gap-3 border-t border-[#ece7de] py-[22px] font-serif text-sm italic text-[#948a7b] sm:mt-14">
            <span className="font-sans text-[11px] not-italic text-[#b59461]">✳</span>
            <span>Com carinho, <strong className="font-medium text-[#8a6a3d]">Lure Aromas</strong></span>
            <span className="font-sans text-[11px] not-italic text-[#b59461]">✳</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CatalogSection
