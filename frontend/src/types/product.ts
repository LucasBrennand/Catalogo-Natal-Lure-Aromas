import productData from '../data/products.json'

export type Product = (typeof productData)[number]
export type ProductCategory = 'Todos' | Product['category']
