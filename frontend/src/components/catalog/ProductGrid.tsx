import type { Product, ProductCategory } from '../../types/product'
import ProductCard from './ProductCard'

type ProductGridProps = {
  products: Product[]
  category: ProductCategory
  isCategoriesOpen: boolean
  onSelectProduct: (product: Product) => void
  onReset: () => void
}

function ProductGrid({ products, category, isCategoriesOpen, onSelectProduct, onReset }: ProductGridProps) {
  return (
    <>
      <div className="flex h-9 items-center gap-2 text-[10px] text-[#9b958c] sm:h-[41px]" aria-live="polite">
        <span>{products.length} {products.length === 1 ? 'presente' : 'presentes'}</span>
        {category !== 'Todos' && <span className="text-[#987340] before:pr-2 before:text-[#b9b1a6] before:content-['·']">{category}</span>}
      </div>

      {products.length > 0 ? (
        <div className={`grid grid-cols-1 gap-4 min-[391px]:grid-cols-2 min-[701px]:grid-cols-3 min-[961px]:gap-x-[19px] min-[961px]:gap-y-6 ${isCategoriesOpen ? 'min-[1024px]:grid-cols-2 min-[1280px]:grid-cols-3 min-[1600px]:grid-cols-4' : 'min-[1024px]:grid-cols-3 min-[1280px]:grid-cols-4'}`}>
          {products.map((product, index) => <ProductCard key={product.id} product={product} index={index} onSelect={onSelectProduct} />)}
        </div>
      ) : (
        <div className="px-4 py-[58px] text-center">
          <span className="text-[30px] text-[#b79560]">✧</span>
          <h3 className="mb-2 mt-2 font-serif text-[23px] font-medium">Nenhum aroma encontrado</h3>
          <p className="text-[12px] text-[#888178]">Tente outra busca ou escolha uma categoria diferente.</p>
          <button type="button" className="mt-2 bg-lure-forest px-[14px] py-2.5 text-[11px] text-white" onClick={onReset}>Ver todos os presentes</button>
        </div>
      )}
    </>
  )
}

export default ProductGrid
