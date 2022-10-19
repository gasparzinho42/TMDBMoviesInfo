export interface IGetTokenResponse {
  data: {
    success: boolean
    expires_at: Date
    request_token: string
  }
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
