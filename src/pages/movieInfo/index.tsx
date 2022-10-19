import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  imageInstanceBackdrop,
  imageInstancePoster,
} from '../../common/baseURLS'
import Box from '../../components/box'

import { TMDBContext } from '../../context'
import { colors } from '../../utils/colors'
import { Percentage, Poster, SubTitle, Text, Title } from './styles'

const MovieInfo: React.FC = () => {
  const { selectedMovie } = useContext(TMDBContext)
  const navigate = useNavigate()
  useEffect(() => {
    if (!selectedMovie.backdrop_path) navigate('/browse')
  }, [])
  const movie = {
    getReleaseDate: () => {
      const date = selectedMovie.release_date || selectedMovie.first_air_date
      return movie.parseDate(date)
    },
    parseDate: (date?: string) => date?.split('-')[0],
    getPercentage: () => selectedMovie.vote_average * 10,
    getPercentageColor: () => {
      const moviePercentage: number = movie.getPercentage()
      if (moviePercentage > 80) return 'green'
      if (moviePercentage > 50) return 'yellow'
      return 'red'
    },
  }
  return (
    <Box
      h='100vh'
      w='100vw'
      flexDirection='column'
      style={{
        backgroundColor: 'rgb(20, 20, 20)',
        overflowX: 'hidden',
      }}
    >
      <Box
        w={'100%'}
        flexDirection='row'
        backgroundImageURL={`${imageInstanceBackdrop}${selectedMovie.backdrop_path}`}
        style={{
          backgroundPosition: '(right - 200px) top',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
        pt={'30px'}
        pb={'30px'}
      >
        <Poster
          src={`${imageInstancePoster}${selectedMovie.poster_path}`}
          alt='Movie image'
        />
        <Box
          w={'50%'}
          flexDirection='column'
          pl={'20px'}
          bgColor={colors.modalBackgroundBlack}
          style={{ borderRadius: '0px 8px 8px 0px' }}
        >
          <Title>
            {selectedMovie.name || selectedMovie.title}
            <span> ({movie.getReleaseDate()})</span>
          </Title>
          <Text>
            <Percentage color={movie.getPercentageColor()}>
              {movie.getPercentage()}%
            </Percentage>{' '}
            de aceitação do público
          </Text>
          <Box w={'50%'} flexWrap='wrap' flexDirection='column' pb='15px'>
            <SubTitle>Sinopse</SubTitle>
            <Text>{selectedMovie.overview}</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default MovieInfo
