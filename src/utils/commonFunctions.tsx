export const movie = {
  getReleaseDate: (releaseDate: string) => {
    return movie.parseDate(releaseDate)
  },
  parseDate: (date?: string) => date?.split('-')[0],
  getEpisodesTotalRunTime: (episodes: number[]) => {
    if (episodes.length === 0) return 0
    return episodes?.reduce(
      (previousNumber, currentNumber) => previousNumber + currentNumber
    )
  },
  getPercentage: (voteAverage: number) => Math.round(voteAverage * 10),
  getPercentageColor: (voteAverage: number) => {
    const moviePercentage: number = movie.getPercentage(voteAverage)
    if (moviePercentage > 80) return 'green'
    if (moviePercentage > 50) return 'yellow'
    return 'red'
  },
  convertMinutes: (TMDBMinutes: number) => {
    const hours = Math.floor(TMDBMinutes / 60)
    const minutes = TMDBMinutes % 60
    const isHoursOnPlural = hours > 1
    if (hours <= 0) {
      return `${minutes} minutos de duração`
    }
    if (minutes <= 0) {
      return `${hours} ${
        isHoursOnPlural ? 'horas de duração' : 'hora de duração'
      } `
    }
    return `${hours} ${
      isHoursOnPlural ? 'horas e ' : 'hora e '
    } ${minutes} minutos de duração`
  },
  genreAddComma: (
    totalLenght: number,
    currentIndex: number,
    genreName: string
  ) => {
    if (totalLenght - 1 === currentIndex) return genreName
    return genreName + ','
  },
}
