import React from 'react'
import Box from '../layout/box'

import { CustomSpan, FooterContainer } from './styles'

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Box
        w='100%'
        flexDirection='column'
        rowGap='20px'
        style={{ justifyContent: 'center', alignItems: 'center' }}
        pl={'30px'}
      >
        <Box w='100%'>
          <CustomSpan>
            visite <a href='https://www.themoviedb.org/?language=pt-BR'>TMDB</a>
          </CustomSpan>
        </Box>
      </Box>
    </FooterContainer>
  )
}

export default Footer
