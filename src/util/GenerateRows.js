export const generateRows = (numRows, numSeatsPerRow) => {
  const rows = []
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' // Usado para rótulos das linhas

  for (let i = 0; i < numRows; i++) {
    const rowLabel = alphabet[i % alphabet.length] // Rótulo da linha (A, B, C, ...)
    const seats = []

    for (let j = 1; j <= numSeatsPerRow; j++) {
      let disabled
      const falseSide = 1
      if (j <= falseSide) {
        // Primeiros dois assentos: 'false'
        disabled = false
      } else if (j > numSeatsPerRow - falseSide) {
        // Últimos dois assentos: 'false'
        disabled = false
      } else {
        const middleStart = Math.floor(numSeatsPerRow / 2)

        if (numSeatsPerRow % 2 === 0) {
          // Se o número de assentos é par, desabilita dois assentos no meio
          if (j === middleStart || j === middleStart + 1) {
            disabled = false
          } else {
            disabled = true
          }
        } else {
          // Se o número de assentos é ímpar, desabilita três assentos no meio
          if (
            j === middleStart ||
            j === middleStart + 1 ||
            j === middleStart + 2
          ) {
            disabled = false
          } else {
            disabled = true
          }
        }
      }
      seats.push({
        rowLabel,
        seatNumber: `${rowLabel}${j}`,
        disabled // Exemplo de lógica para assentos desativados (30% de chance)
      })
    }

    rows.push(seats)
    console.log(rows.seatNumber)
  }

  return rows
}
