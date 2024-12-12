export const formatWeekDay = (dateString) => {
  const date = new Date(dateString) // Cria o objeto Date
  const weekdays = ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sáb'] // Array com os dias da semana em português
  const weekDayIndex = date.getUTCDay() // Retorna o índice do dia da semana em UTC (0 = domingo, 1 = segunda, ...)
  return weekdays[weekDayIndex].toUpperCase() // Retorna o nome do dia da semana em maiúsculas
}

export const formatDate = (dateString) => {
  const date = new Date(dateString) // Cria o objeto Date
  const day = date.getUTCDate() // Usa getUTCDate para evitar deslocamento de horário
  const month = date.getUTCMonth() + 1 // getUTCMonth retorna de 0 a 11
  return `${String(day).padStart(2, '0')}/${String(month).padStart(2, '0')}`
}

export const groupByDate = (shows) => {
  const grouped = {}
  shows.forEach(({ showDateTime }) => {
    const date = showDateTime.split('T')[0] // Isolando a data (YYYY-MM-DD)
    if (!grouped[date]) grouped[date] = []
    grouped[date].push(showDateTime)
  })
  return grouped
}

export const formatTime = (time) => {
  const date = new Date(time)
  return date.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'America/Manaus' // Define o fuso horário correto
  })
}
