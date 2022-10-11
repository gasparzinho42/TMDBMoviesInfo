import React, { createContext, PropsWithChildren, useState } from 'react'

export interface NetflixContextType {
  userSession: UserSession
  setUserSession: React.Dispatch<React.SetStateAction<UserSession>>
}
export interface UserSession {
  expires_at: Date | null
  request_token: string
  session_id: string
}
export const NetflixContext: React.Context<NetflixContextType> = createContext(
  {} as NetflixContextType
)
function NetflixContextProvider({ children }: PropsWithChildren) {
  const [userSession, setUserSession] = useState<UserSession>({
    expires_at: null,
    request_token: '',
    session_id: '',
  })
  const values = {
    userSession,
    setUserSession,
  }
  return (
    <NetflixContext.Provider value={values}>{children}</NetflixContext.Provider>
  )
}

export default NetflixContextProvider
