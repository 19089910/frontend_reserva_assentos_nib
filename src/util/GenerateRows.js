export const generateRows = (numRows, numSeatsPerRow) => {
  const rows = []
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' // Usado para rótulos das linhas

  for (let i = 0; i < numRows; i++) {
    const rowLabel = alphabet[i % alphabet.length] // Rótulo da linha (A, B, C, ...)
    const seats = []

    for (let j = 1; j <= numSeatsPerRow; j++) {
      seats.push({
        rowLabel,
        seatNumber: `${rowLabel}${j}`,
        disabled: Math.random() < 0.3 // Exemplo de lógica para assentos desativados (30% de chance)
      })
    }

    rows.push(seats)
    console.log(rows)
  }

  return rows
}
