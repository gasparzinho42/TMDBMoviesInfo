import React, { createContext, PropsWithChildren, useState } from 'react'
import { IFilm } from '../components/filmRoll'

export interface ITMDBContextType {
  userSession: IUserSession
  setUserSession: React.Dispatch<React.SetStateAction<IUserSession>>
  selectedMovie: IFilm
  setSelectedMovie: React.Dispatch<React.SetStateAction<IFilm>>
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
  const [selectedMovie, setSelectedMovie] = useState({} as IFilm)
  const values = {
    userSession,
    setUserSession,
    selectedMovie,
    setSelectedMovie,
  }
  return <TMDBContext.Provider value={values}>{children}</TMDBContext.Provider>
}

export default TMDBContextProvider
