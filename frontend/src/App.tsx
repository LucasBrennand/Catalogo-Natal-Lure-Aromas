import { useState } from 'react'
import CatalogSection from './components/catalog/CatalogSection'
import ProductDialog from './components/catalog/ProductDialog'
import DecorativeSnow from './components/layout/DecorativeSnow'
import SiteFooter from './components/layout/SiteFooter'
import Header from './Header/Header'
import type { Product } from './types/product'

function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  return (
    <main className="min-h-screen bg-lure-paper text-[#302d27]">
      <Header />
      <CatalogSection onSelectProduct={setSelectedProduct} />
      <SiteFooter />
      <DecorativeSnow />
      {selectedProduct && <ProductDialog key={selectedProduct.id} product={selectedProduct} onClose={() => setSelectedProduct(null)} />}
    </main>
  )
}

export default App
