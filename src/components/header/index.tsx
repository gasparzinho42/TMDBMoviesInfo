import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { deleteSession } from '../../common/API'
import { IDeleteSessionRequest } from '../../common/interfaces'
import { TMDBContext } from '../../context'
import { HeaderContainer } from './styles'
interface headerProps {
  hideLogout?: boolean
}
const Header: React.FC<headerProps> = ({ hideLogout }) => {
  const { userSession } = useContext(TMDBContext)
  const navigate = useNavigate()
  const HandleLogout = async () => {
    console.log('userSession', userSession)
    const data: IDeleteSessionRequest = {
      session_id: userSession.session_id,
    }
    const deleteSessionRes = await deleteSession(data)
    navigate('/')
    console.log(deleteSessionRes?.success)
  }
  return (
    <HeaderContainer>
      <a href='https://www.themoviedb.org/?language=pt-BR'>
        <img
          src='https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_1-8ba2ac31f354005783fab473602c34c3f4fd207150182061e425d366e4f34596.svg'
          width='166px'
          height='45px'
          alt='TMDB Logo'
        />
      </a>
      <span
        style={{
          color: 'white',
          marginRight: 30,
          cursor: 'pointer',
          display: `${hideLogout ? 'none' : 'block'}`,
        }}
        onClick={HandleLogout}
      >
        Logout
      </span>
    </HeaderContainer>
  )
}

export default Header
