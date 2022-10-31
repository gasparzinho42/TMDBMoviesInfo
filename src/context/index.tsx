import React, { createContext, PropsWithChildren, useState } from 'react'
import { IFilm } from '../pages/browse/components/filmRoll'

export interface ITMDBContextType {
  userSession: IUserSession
  setUserSession: React.Dispatch<React.SetStateAction<IUserSession>>
  currentMovieId: string
  setCurrentMovieId: React.Dispatch<React.SetStateAction<string>>
}
export interface IUserSession {
  expires_at: Date | null
  request_token: string
  session_id: string
}
export const TMDBContext: React.Context<ITMDBContextType> = createContext(
  {} as ITMDBContextType
)
function TMDBContextProvider({ children }: PropsWithChildren) {
  const [userSession, setUserSession] = useState<IUserSession>({
    expires_at: null,
    request_token: '',
    session_id: '',
  })
  const [currentMovieId, setCurrentMovieId] = useState('')
  const values = {
    userSession,
    setUserSession,
    currentMovieId,
    setCurrentMovieId,
  }
  return <TMDBContext.Provider value={values}>{children}</TMDBContext.Provider>
}

export default TMDBContextProvider
