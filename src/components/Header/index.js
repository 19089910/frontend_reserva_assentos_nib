import React from 'react'

export function Header() {
  return (
    <div className="mx-auto my-0 flex h-[50px] max-w-screen-xl select-none items-center justify-between md:h-16 xl:px-4">
      {/* Logo */}
      <a
        className="justify-center font-uol inline-flex items-center gap-2 whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none hover:opacity-70 text-ing-blue-400 border-none bg-transparent disabled:text-ing-neutral-200/50 h-12 text-xl rounded-xl overflow-hidden px-0 md:pr-24"
        href="https://www.ingresso.com/"
      >
        <div className="relative h-9 w-7 min-[600px]:w-[150px]">
          <img
            alt="Logo da Ingresso.com"
            aria-label="Navegar para a página inicial da Ingresso.com"
            loading="lazy"
            decoding="async"
            className="inline-block max-w-none align-baseline"
            src="https://ingresso-a.akamaihd.net/catalog/img/ingresso-logo-v1-desktop-final.svg"
            style={{
              position: 'absolute',
              height: '100%',
              width: '100%',
              inset: 0,
              color: 'transparent'
            }}
          />
        </div>
      </a>

      {/* Location Button */}
      <button
        className="justify-center font-uol whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none hover:opacity-70 border-none bg-transparent disabled:text-ing-neutral-200/50 h-12 rounded-xl mx-auto flex items-center gap-[6px] p-0 text-[13px] leading-5 text-ing-blue-200 max-md:h-[30px] max-md:flex-1 md:mx-0 md:text-base"
        aria-label="Abrir tooltip para trocar a localização atual"
        type="button"
        aria-haspopup="dialog"
        aria-expanded="false"
        aria-controls="radix-:rb:"
      >
        <div className="size-[22px] fill-ing-blue-200 md:size-[30px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            className="injected-svg"
            role="img"
          >
            {/* SVG Path */}
            <path d="M33.118 52.733c..." />
          </svg>
        </div>
        Manaus
      </button>

      <div className="flex items-center justify-between gap-2 md:ml-auto md:gap-3 lg:gap-6">
        {/* Search Button */}
        <button
          className="justify-center font-uol inline-flex items-center gap-2 whitespace-nowrap focus-visible:outline-none focus-visible:ring-ring disabled:pointer-events-none hover:opacity-70 text-ing-blue-400 border-none bg-transparent disabled:text-ing-neutral-200/50 h-12 text-xl rounded-xl p-0 focus-visible:ring-0 max-md:h-[30px] max-md:flex-1"
          aria-label="Abrir tooltip para pesquisas no site"
          type="button"
          aria-haspopup="dialog"
          aria-expanded="false"
          aria-controls="radix-:r4:"
        >
          <div className="size-6 fill-ing-blue-200 md:size-9">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="injected-svg"
              role="img"
            >
              {/* SVG Path */}
              <path d="M9.75 2.75a6.625 6.625..." />
            </svg>
          </div>
        </button>

        {/* User Button */}
        <button
          className="justify-center font-uol inline-flex items-center gap-2 whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none hover:opacity-70 text-ing-blue-400 border-none bg-transparent disabled:text-ing-neutral-200/50 h-12 text-xl rounded-xl px-0"
          aria-label="Abrir tooltip para login ou cadastro"
          type="button"
          aria-haspopup="dialog"
          aria-expanded="false"
          aria-controls="radix-:r5:"
        >
          <div className="flex items-center gap-3 text-left text-ing-blue-200">
            <div className="size-6 cursor-pointer fill-ing-blue-200 md:size-9">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
                className="injected-svg"
                role="img"
              >
                {/* SVG Path */}
                <path d="M32 6.667c13.991 0..." />
              </svg>
            </div>
            <p className="hidden w-24 whitespace-pre-wrap text-sm leading-none md:block">
              Entre ou Cadastre-se
            </p>
          </div>
        </button>

        {/* Support Button */}
        <button
          className="justify-center font-uol inline-flex items-center gap-2 whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none hover:opacity-70 text-ing-blue-400 border-none bg-transparent disabled:text-ing-neutral-200/50 h-12 text-xl rounded-xl p-0 max-md:h-[30px] max-md:flex-1"
          aria-label="Abrir tooltip para suporte ao cliente"
          type="button"
          aria-haspopup="dialog"
          aria-expanded="false"
          aria-controls="radix-:r6:"
        >
          <div className="size-6 fill-ing-blue-200 md:size-9">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
              className="injected-svg"
              role="img"
            >
              {/* SVG Path */}
              <path d="M32 6.667c13.991 0..." />
            </svg>
          </div>
        </button>
      </div>
    </div>
  )
}
