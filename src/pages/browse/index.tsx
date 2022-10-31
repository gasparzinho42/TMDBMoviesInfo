import React from 'react'
import { requests } from '../../common/requests'
import Box from '../../components/layout/box'
import FilmRoll from './components/filmRoll'
import Header from '../../components/header'

const Browse: React.FC = () => {
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
      <Header />
      <FilmRoll
        title='Originais Netflix'
        fetchURL={requests.fetchNetflixOriginals}
        type='tv'
      />
      <FilmRoll
        title='Bombando agora'
        fetchURL={requests.fetchTrending}
        type='mixed'
      />
      <FilmRoll
        title='Filmes mais bem avaliados'
        fetchURL={requests.fetchTopRated}
        isTopTen
        type='movie'
      />
      <FilmRoll
        title='Filmes de ação'
        fetchURL={requests.fetchActionMovies}
        type='movie'
      />
      <FilmRoll
        title='Filmes de comédia'
        fetchURL={requests.fetchComedyMovies}
        type='movie'
      />
      <FilmRoll
        title='Filmes de terror'
        fetchURL={requests.fetchHorrorMovies}
        type='movie'
      />
      <FilmRoll
        title='Filmes de romance'
        fetchURL={requests.fetchRomanceMovies}
        type='movie'
      />
      <FilmRoll
        title='Documentários'
        fetchURL={requests.fetchDocumentaries}
        type='movie'
      />
    </Box>
  )
}

export default Browse
