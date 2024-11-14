import React from 'react'

export function DetailsShow() {
  return (
    <>
      <section>
        <h1>Sinopse:</h1>
        <p data-testid="movie-synopsis">
          Em Venom: A Última Rodada, Tom Hardy retorna ao papel de Venom, um dos
          maiores e mais complexos personagens da Marvel, para o filme final da
          trilogia. Eddie e Venom estão fugindo. Perseguidos pelos dois mundos,
          a dupla é obrigada a tomar uma decisão devastadora de que vai fechar
          as cortinas da última rodada de Venom e Eddie.
        </p>
        <button>Ver sessões</button>
      </section>
      {/* trilers */}
      <section></section>
      <section>
        <h1>Ficha técnica:</h1>
        <ul>
          <li>
            <strong>Nome Original:</strong>
            <br />
            Venom: The Last Dance
          </li>
          <li>
            <strong>Direção:</strong>
            <br />
            Kelly Marcel
          </li>
          <li>
            <strong>Duração:</strong>
            <br />
            135 min[]
          </li>
          <li>
            <strong>Gênero:</strong>
            <br />
            <span className="capitalize">Ação</span>,
            <span className="capitalize">Aventura</span>,
            <span className="capitalize">Ficção</span>,
            <span className="capitalize">Suspense</span>
          </li>
          <li>
            <strong>Distribuidor:</strong>
            <br />
            Sony Pictures
          </li>
        </ul>
      </section>
    </>
  )
}
