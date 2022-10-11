import axios from 'axios'

export const apiInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
})
export const imageInstance = 'https://image.tmdb.org/t/p/original'
export const netflixNumbers = (number: number) => {
  return `https://top10.netflix.com/images/big_numbers/${number}.png`
}
