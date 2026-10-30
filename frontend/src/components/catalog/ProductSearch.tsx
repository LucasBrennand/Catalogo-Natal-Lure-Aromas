type ProductSearchProps = {
  query: string
  onQueryChange: (query: string) => void
}

function ProductSearch({ query, onQueryChange }: ProductSearchProps) {
  return (
    <label className="flex w-full min-w-0 items-center gap-[9px] rounded-[3px] border border-[#e8e2d8] bg-white px-[11px] py-[9px] focus-within:border-[#b99968] focus-within:ring-2 focus-within:ring-[#b58a52]/10 lg:w-[230px] lg:min-w-[180px]">
      <svg className="size-[15px] shrink-0 stroke-[#9f988b]" aria-hidden="true" viewBox="0 0 24 24" fill="none" strokeWidth="1.5"><circle cx="10.8" cy="10.8" r="6.8" /><path d="m16 16 4.2 4.2" /></svg>
      <input className="w-full min-w-0 bg-transparent text-[11px] text-[#35322c] outline-none placeholder:text-[#a49e94]" value={query} onChange={(event) => onQueryChange(event.target.value)} placeholder="Buscar um aroma..." aria-label="Buscar um aroma" />
      {query && <button type="button" className="px-px text-lg leading-none text-[#8f8779]" onClick={() => onQueryChange('')} aria-label="Limpar busca">×</button>}
    </label>
  )
}

export default ProductSearch
