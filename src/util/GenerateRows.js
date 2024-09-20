export const generateRows = (numRows, numSeatsPerRow) => {
  const rows = []
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' // Usado para rótulos das linhas

  for (let i = 0; i < numRows; i++) {
    const rowLabel = alphabet[i % alphabet.length] // Rótulo da linha (A, B, C, ...)
    const seats = []

    for (let j = 1; j <= numSeatsPerRow; j++) {
      let disabled
      const falseSide = 1
      if (j <= falseSide || j > numSeatsPerRow - falseSide) {
        // Primeiros e últimos assentos: 'false'
        disabled = false
      } else {
        const middleStart = Math.floor(numSeatsPerRow / 2)

        if (numSeatsPerRow % 2 === 0) {
          // Se o número de assentos é par, desabilita dois assentos no meio
          // Par: desabilita dois assentos no meio
          disabled = !(j === middleStart || j === middleStart + 1)
        } else {
          // Se o número de assentos é ímpar, desabilita três assentos no meio
          // Ímpar: desabilita três assentos no meio
          disabled = !(
            j === middleStart ||
            j === middleStart + 1 ||
            j === middleStart + 2
          )
        }
      }
      seats.push({
        rowLabel,
        seatNumber: null,
        disabled
      })
    }

    rows.push(seats)

    // Segundo loop: atribuir seatNumber para assentos 'true'
    for (let i = 0; i < rows.length; i++) {
      let seatCounter = 1 // Contador de assentos ativos começa em 1 para cada linha

      for (let j = 0; j < rows[i].length; j++) {
        if (rows[i][j].disabled) {
          // Se o assento estiver ativo (disabled: true), atribui seatNumber
          rows[i][j].seatNumber = `${rows[i][j].rowLabel}${seatCounter}`
          seatCounter++ // Incrementa o contador para o próximo assento
        }
      }
    }
  }

  return rows
}
