import React from 'react'
import { requests } from '../../common/requests'
import Box from '../../components/box'
import FilmRoll from '../../components/filmRoll'

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
      <FilmRoll
        title='NETFLIX ORIGINALS'
        fetchURL={requests.fetchNetflixOriginals}
      />
      <FilmRoll title='Trending Now' fetchURL={requests.fetchTrending} />
      <FilmRoll title='Top 10' fetchURL={requests.fetchTopRated} isTopTen />
      <FilmRoll title='Action Movies' fetchURL={requests.fetchActionMovies} />
      <FilmRoll title='Comedy Movies' fetchURL={requests.fetchComedyMovies} />
      <FilmRoll title='Horror Movies' fetchURL={requests.fetchHorrorMovies} />
      <FilmRoll title='Romance Movies' fetchURL={requests.fetchRomanceMovies} />
      <FilmRoll title='Documentaries' fetchURL={requests.fetchDocumentaries} />
    </Box>
  )
}

export default Browse
