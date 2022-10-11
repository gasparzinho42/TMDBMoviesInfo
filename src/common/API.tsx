import axios, { AxiosRequestConfig } from 'axios'
import { apiInstance } from './baseURLS'
import {
  GetTokenResponse,
  AuthWithLoginRequest,
  CreateSessionRequest,
  CreateSessionResponse,
  DeleteSessionRequest,
  DeleteSessionResponse,
} from './interfaces'

export const getToken = async () => {
  const config: AxiosRequestConfig<any> = {
    url: `/authentication/token/new?api_key=${process.env.REACT_APP_API_KEY}`,
  }
  const res: GetTokenResponse = await apiInstance.request(config)
  return res.data
}
export const validateWithLogin = async (data: AuthWithLoginRequest) => {
  try {
    const config: AxiosRequestConfig<any> = {
      url: `/authentication/token/validate_with_login?api_key=${process.env.REACT_APP_API_KEY}`,
      data: data,
      method: 'post',
    }
    const res: GetTokenResponse = await apiInstance.request(config)
    return res.data.request_token
  } catch (error) {
    console.log(error)
  }
}
export const createSession = async (data: CreateSessionRequest) => {
  try {
    const config: AxiosRequestConfig<any> = {
      url: `/authentication/session/new?api_key=${process.env.REACT_APP_API_KEY}`,
      data: data,
      method: 'post',
    }
    const res: CreateSessionResponse = await apiInstance.request(config)
    return res.data.session_id
  } catch (error) {
    console.log(error)
  }
}
export const deleteSession = async (data: DeleteSessionRequest) => {
  try {
    const config: AxiosRequestConfig<any> = {
      url: `/authentication/session?api_key=${process.env.REACT_APP_API_KEY}`,
      data: data,
      method: 'delete',
    }
    const res: DeleteSessionResponse = await apiInstance.request(config)
    return res
  } catch (error) {
    console.log(error)
  }
}
