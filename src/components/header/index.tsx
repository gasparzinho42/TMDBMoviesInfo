import React from 'react'
import { HeaderContainer } from './styles'

const Header: React.FC = () => {
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
    </HeaderContainer>
  )
}

export default Header
