import { AxiosRequestConfig } from 'axios'
import { apiInstance } from './baseURLS'
import {
  IGetTokenResponse,
  IAuthWithLoginRequest,
  ICreateSessionRequest,
  ICreateSessionResponse,
  IDeleteSessionRequest,
  IDeleteSessionResponse,
  IGetMovieDetailResponse,
  IGetTvDetailResponse,
} from './interfaces'

export const getToken = async () => {
  const config: AxiosRequestConfig<any> = {
    url: `/authentication/token/new?api_key=${process.env.REACT_APP_API_KEY}`,
  }
  const res: IGetTokenResponse = await apiInstance.request(config)
  return res.data
}
export const validateWithLogin = async (data: IAuthWithLoginRequest) => {
  try {
    const config: AxiosRequestConfig<any> = {
      url: `/authentication/token/validate_with_login?api_key=${process.env.REACT_APP_API_KEY}`,
      data: data,
      method: 'post',
    }
    const res: IGetTokenResponse = await apiInstance.request(config)
    return res.data.request_token
  } catch (error) {
    console.log(error)
  }
}
export const createSession = async (data: ICreateSessionRequest) => {
  try {
    const config: AxiosRequestConfig<any> = {
      url: `/authentication/session/new?api_key=${process.env.REACT_APP_API_KEY}`,
      data: data,
      method: 'post',
    }
    const res: ICreateSessionResponse = await apiInstance.request(config)
    return res.data.session_id
  } catch (error) {
    console.log(error)
  }
}
export const deleteSession = async (data: IDeleteSessionRequest) => {
  try {
    const config: AxiosRequestConfig<any> = {
      url: `/authentication/session?api_key=${process.env.REACT_APP_API_KEY}`,
      data: data,
      method: 'delete',
    }
    const res: IDeleteSessionResponse = await apiInstance.request(config)
    return res
  } catch (error) {
    console.log(error)
  }
}
export const getMovieDetails = async (movie_id: string) => {
  try {
    const config: AxiosRequestConfig<any> = {
      url: `/movie/${movie_id}?api_key=${process.env.REACT_APP_API_KEY}&append_to_response=credits&language=pt-BR`,
      method: 'get',
    }
    const res: IGetMovieDetailResponse = await apiInstance.request(config)
    return res.data
  } catch (error) {
    console.log(error)
  }
}
export const getTvDetails = async (tv_id: string) => {
  try {
    const config: AxiosRequestConfig<any> = {
      url: `/tv/${tv_id}?api_key=${process.env.REACT_APP_API_KEY}&append_to_response=credits&language=pt-BR`,
      method: 'get',
    }
    const res: IGetTvDetailResponse = await apiInstance.request(config)
    return res.data
  } catch (error) {
    console.log(error)
  }
}
