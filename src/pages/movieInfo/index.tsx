import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getMovieDetails, getTvDetails } from '../../common/API'
import { IGetMovieDetail, IGetTvDetail } from '../../common/interfaces'
import Box from '../../components/layout/box'
import Header from '../../components/header'
import Movie from './components/movie'
import Tv from './components/tv'

const MovieInfo: React.FC = () => {
  const { mediaTypeId, mediaType } = useParams()
  const [movieDetail, setMovieDetail] = useState<IGetMovieDetail>()
  const [tvDetail, setTvDetail] = useState<IGetTvDetail>()
  const navigate = useNavigate()
  useEffect(() => {
    api.fetchMediaTypeDetail()
  }, [])

  const api = {
    fetchMediaTypeDetail: async () => {
      if (mediaTypeId === undefined) return navigate('/browse')
      if (mediaType === 'movie') {
        const result = await getMovieDetails(mediaTypeId)
        setMovieDetail(result || ({} as IGetMovieDetail))
      } else {
        const result = await getTvDetails(mediaTypeId)
        if (result === undefined) return navigate('/browse')
        setTvDetail(result)
      }
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
      <Header />
      {mediaType === 'movie' ? (
        <Movie movieDetail={movieDetail} />
      ) : (
        <Tv tvDetail={tvDetail} />
      )}
    </Box>
  )
}

export default MovieInfo
