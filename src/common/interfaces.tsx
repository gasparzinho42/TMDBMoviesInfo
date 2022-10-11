export interface GetTokenResponse {
  data: {
    success: boolean
    expires_at: Date
    request_token: string
  }
}
export interface AuthWithLoginRequest {
  username: string
  password: string
  request_token: string
}
export interface CreateSessionRequest {
  request_token: string
}
export interface DeleteSessionRequest {
  session_id: string
}
export interface DeleteSessionResponse {
  success: boolean
}
export interface CreateSessionResponse {
  data: {
    success: boolean
    session_id: string
  }
}
interface requestError {
  status_message: string
  status_code: number
}
