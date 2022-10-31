export interface IGetTokenResponse {
  data: {
    success: boolean
    expires_at: Date
    request_token: string
  }
}
export interface IGenre {
  id: number
  name: string
}
export interface IProduction_companies {
  name: string
  id: number
  logo_path: string | null
  origin_country: string
}
export interface IProduction_countries {
  iso_3166_1: string
  name: string
}
export interface ISpoken_languages {
  iso_639_1: string
  name: string
}
export interface IGetMovieDetailResponse {
  data: IGetMovieDetail
}
export interface IGetTvDetailResponse {
  data: IGetTvDetail
}
export interface ICast {
  adult: boolean
  gender: number
  id: number
  known_for_department: string
  name: string
  original_name: string
  popularity: number
  profile_path: string
  cast_id: number
  character: string
  credit_id: string
  order: number
}
export interface ICrew {
  adult: boolean
  gender: number
  id: number
  known_for_department: string
  name: string
  original_name: string
  popularity: number
  profile_path: string
  credit_id: string
  department: string
  job: string
}
export interface ICredits {
  cast: ICast[]
  crew: ICrew[]
}
export interface IGetMovieDetail {
  adult: boolean
  backdrop_path: string | null
  belongs_to_collection: string | null
  budget: number
  genres: IGenre[]
  homepage: string
  id: number
  imdb_id: string | null
  original_language: string
  original_title: string
  overview: string | null
  popularity: number
  poster_path: string | null
  production_companies: IProduction_companies[]
  production_countries: IProduction_countries[]
  release_date: string
  revenue: number
  runtime: number
  spoken_languages: ISpoken_languages[]
  status: string
  tagline: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
  credits: ICredits
}
export interface ICreated_by {
  id: number
  credit_id: string
  name: string
  gender: number
  profile_path: string
}
export interface ILastEpisodeToAir {
  air_date: string
  episode_number: number
  id: number
  name: string
  overview: string
  production_code: number
  season_number: number
  still_path: string
  vote_average: number
  vote_count: number
}
export interface INetworks {
  name: string
  id: number
  logo_path: string
  origin_country: string
}
export interface seasons {
  air_date: string
  episode_count: number
  id: number
  name: string
  overview: string
  poster_path: string
  season_number: number
}
export interface IGetTvDetail {
  backdrop_path: string | null
  created_by: ICreated_by[]
  episode_run_time: number[]
  first_air_date: string
  genres: IGenre[]
  homePage: string
  id: number
  in_production: boolean
  languages: string[]
  last_air_date: string | null
  last_episode_to_air: ILastEpisodeToAir
  name: string
  next_episode_to_air: ILastEpisodeToAir
  networks: INetworks[]
  number_of_episodes: number
  number_of_seasons: number
  origin_country: string[]
  original_language: string
  original_name: string
  overview: string | null
  popularity: number
  poster_path: string | null
  production_companies: IProduction_companies[]
  production_countries: IProduction_countries[]
  seasons: seasons[]
  spoken_languages: ISpoken_languages[]
  status: string
  tagline: string
  type: string
  vote_average: number
  vote_count: number
  credits: ICredits
}
export interface IAuthWithLoginRequest {
  username: string
  password: string
  request_token: string
}
export interface ICreateSessionRequest {
  request_token: string
}
export interface IDeleteSessionRequest {
  session_id: string
}
export interface IDeleteSessionResponse {
  success: boolean
}
export interface ICreateSessionResponse {
  data: {
    success: boolean
    session_id: string
  }
}
export interface IrequestError {
  status_message: string
  status_code: number
}
export interface ITrending {
  adult: boolean
  backdrop_path: string
  id: number
  title: string
  original_language: string
  original_title: string
  overview: string
  poster_path: string
  media_type: 'tv' | 'movie'
  genre_ids: number[]
  popularity: number
  release_date: string
  video: boolean
  vote_average: number
  vote_count: number
}
