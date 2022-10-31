import axios from 'axios'

export const apiInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
})
export const imageInstance = 'https://image.tmdb.org/t/p/original'
export const topTenImageInstance = 'https://image.tmdb.org/t/p/w154'
export const imageInstancePoster =
  'https://image.tmdb.org/t/p/w300_and_h450_bestv2'
export const imageInstanceFace =
  'https://www.themoviedb.org/t/p/w66_and_h66_face'
export const imageInstanceBackdrop =
  'https://image.tmdb.org/t/p/w1920_and_h800_multi_faces'
export const netflixNumbers = (number: number) => {
  return `https://top10.netflix.com/images/big_numbers/${number}.png`
}
