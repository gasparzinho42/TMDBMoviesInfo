import React from 'react'
import { requests } from '../../common/requests'
import Box from '../../components/box'
import FilmRoll from '../../components/filmRoll'
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
      />
      <FilmRoll title='Bombando agora' fetchURL={requests.fetchTrending} />
      <FilmRoll title='Top 10' fetchURL={requests.fetchTopRated} isTopTen />
      <FilmRoll title='Filmes de ação' fetchURL={requests.fetchActionMovies} />
      <FilmRoll
        title='Filmes de comédia'
        fetchURL={requests.fetchComedyMovies}
      />
      <FilmRoll
        title='Filmes de terror'
        fetchURL={requests.fetchHorrorMovies}
      />
      <FilmRoll
        title='Filmes de romance'
        fetchURL={requests.fetchRomanceMovies}
      />
      <FilmRoll title='Documentários' fetchURL={requests.fetchDocumentaries} />
    </Box>
  )
}

export default Browse
