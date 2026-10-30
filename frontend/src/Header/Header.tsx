function Header() {
  return (
    <header id="inicio" className="relative flex min-h-[388px] items-center justify-center overflow-hidden bg-lure-forest px-5 pb-[52px] pt-[22px] text-[#f8f4ec] sm:px-[7vw]">
      <div aria-hidden="true" className="pointer-events-none absolute -left-[255px] -top-[235px] size-[410px] rounded-full border border-[#caa870]/15 shadow-[0_0_0_22px_rgba(202,168,112,.04),0_0_0_48px_rgba(202,168,112,.03)]" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-[320px] -right-[285px] size-[510px] rounded-full border border-[#caa870]/15 shadow-[0_0_0_22px_rgba(202,168,112,.05),0_0_0_48px_rgba(202,168,112,.035)]" />
      <a className="absolute left-[18px] top-4 z-10 block w-[65px] sm:left-[max(5vw,calc((100vw-1250px)/2))] sm:top-6 sm:w-[88px]" href="#inicio" aria-label="Lure Aromas, início">
        <img className="block h-auto w-full drop-shadow-[0_2px_6px_rgba(0,0,0,.15)]" src="/images/logo_lure.png" alt="Lure Aromas" />
      </a>
      <div aria-hidden="true" className="absolute right-[12%] top-12 text-[15px] text-[#cfb486] opacity-80 sm:right-[15%] sm:top-[104px] sm:text-xl">✳</div>
      <div aria-hidden="true" className="absolute bottom-11 left-[15%] text-[15px] text-[#cfb486] opacity-80 sm:bottom-[85px] sm:left-[19%]">✦</div>
      <div aria-hidden="true" className="absolute -left-[27px] top-[30%] h-[138px] w-[92px] rotate-[-28deg] scale-50 rounded-[50%] border border-[#c4a36b]/50 opacity-50 sm:left-[12%] sm:top-[20%] sm:scale-[.79]" />
      <div aria-hidden="true" className="absolute -right-[28px] top-[37%] h-[138px] w-[92px] rotate-[23deg] scale-[.45] rounded-[50%] border border-[#c4a36b]/50 opacity-50 sm:right-[12%] sm:top-[24%] sm:scale-[.66]" />
      <div className="relative z-10 mt-[39px] text-center">
        <span className="text-[10px] font-semibold uppercase tracking-[.24em] text-[#cfb586]">Coleção especial</span>
        <h1 className="mx-auto mt-[15px] max-w-[650px] font-serif text-[clamp(34px,9vw,52px)] font-medium leading-[1.1] tracking-[-.035em] text-[#fffdf8] sm:text-[clamp(40px,5.3vw,66px)]">Um Natal que <em className="font-medium text-[#d2b47e]">perfuma</em></h1>
        <p className="mx-auto mb-5 mt-[15px] max-w-[320px] text-[12px] leading-relaxed tracking-[.015em] text-[#fffcf5]/75 sm:max-w-none sm:text-[13px]">Presentes feitos para tornar cada encontro ainda mais especial.</p>
        <a className="inline-flex items-center gap-[9px] border-b border-[#d0b282]/55 pb-1 text-[11px] text-[#e5ceaa] transition-[gap] duration-200 hover:gap-[14px]" href="#catalogo">Encontre seu presente <span aria-hidden="true" className="text-[15px]">↓</span></a>
      </div>
      <div className="absolute inset-x-5 bottom-0 border-b border-[#c2a16a]/50 sm:inset-x-[7vw]" />
    </header>
  )
}

export default Header
