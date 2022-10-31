import React from 'react'
import {
  imageInstanceBackdrop,
  imageInstanceFace,
  imageInstancePoster,
} from '../../../../common/baseURLS'
import { IGetMovieDetail } from '../../../../common/interfaces'
import Box from '../../../../components/layout/box'
import { MainTitle } from '../../../browse/components/filmRoll/styles'
import { colors } from '../../../../utils/colors'
import { movie } from '../../../../utils/commonFunctions'
import {
  Percentage,
  Poster,
  SubTitle,
  AltSubTitle,
  Title,
  Text,
  TitleCast,
} from '../../styles'
import Genre from '../genre'
import { CastImage, ImagePlaceholder } from '../imagePlaceholder/styles'

interface IMovieProps {
  movieDetail: IGetMovieDetail | undefined
}
const Movie: React.FC<IMovieProps> = ({ movieDetail }) => {
  if (!movieDetail?.id) {
    return <span style={{ color: 'white' }}>Carregando...</span>
  }
  const movieUtils = {
    getDirectors: () => {
      return movieDetail.credits.crew.filter(
        person => person.department === 'Directing'
      )
    },
  }
  return (
    <React.Fragment>
      <Box
        w={'100%'}
        flexDirection='row'
        backgroundImageURL={`${imageInstanceBackdrop}${movieDetail.backdrop_path}`}
        style={{
          backgroundPosition: '(right - 200px) top',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
        pt={'30px'}
        pb={'30px'}
        mb='12px'
      >
        <Poster
          src={`${imageInstancePoster}${movieDetail.poster_path}`}
          alt='Movie image'
        />
        <Box
          w={'50%'}
          flexDirection='column'
          pl={'20px'}
          pb='10px'
          bgColor={colors.modalBackgroundBlack}
          style={{ borderRadius: '0px 8px 8px 0px' }}
        >
          <Title>
            {movieDetail.title}
            <span> ({movie.getReleaseDate(movieDetail.release_date)})</span>
          </Title>
          <Box w={'100%'} pl='5px'>
            <Box w={'max-content'} alignItems='center'>
              {movieDetail?.genres?.map((genre, index, array) => {
                return (
                  <Genre
                    genre={movie.genreAddComma(array.length, index, genre.name)}
                    key={index}
                  />
                )
              })}
            </Box>
            <Box w={'max-content'} alignItems='center'>
              <AltSubTitle>
                · {'  '}
                {movie.convertMinutes(movieDetail.runtime)}
              </AltSubTitle>
            </Box>
          </Box>
          <Box
            w='100%'
            alignItems='flex-start'
            flexDirection='column'
            pl='5px'
            mt='10px'
            mb='10px'
          >
            <Text>
              <Percentage
                color={movie.getPercentageColor(movieDetail.vote_average)}
              >
                {movie.getPercentage(movieDetail.vote_average)}%
              </Percentage>{' '}
              de aceitação do público
            </Text>
          </Box>
          {movieDetail.overview !== '' && (
            <Box
              w={'50%'}
              flexWrap='wrap'
              flexDirection='column'
              pb='15px'
              pl='5px'
              mt='20px'
              rowGap='2px'
            >
              <SubTitle>Sinopse</SubTitle>
              <Text>{movieDetail.overview}</Text>
            </Box>
          )}

          <Box w='100%' flexDirection='column' pl='5px'>
            <SubTitle>Equipe de direção</SubTitle>
            <Box
              w='100%'
              h='max-content'
              mt='10px'
              style={{ overflowX: 'scroll', overflowY: 'hidden' }}
            >
              {movieUtils.getDirectors().map(director => {
                return (
                  <Box w='max-content' mr='5px' alignItems='center'>
                    <Box
                      w='100%'
                      h='max-content'
                      flexDirection='column'
                      pl='4px'
                    >
                      <SubTitle>{director.name}</SubTitle>
                      <AltSubTitle>{director.job}</AltSubTitle>
                    </Box>
                  </Box>
                )
              })}
            </Box>
          </Box>
        </Box>
      </Box>
      <Box w='100%' alignItems='center' columnGap='5px' pl='15px'>
        <MainTitle>Elenco</MainTitle>
        <AltSubTitle>({movieDetail.credits.cast.length})</AltSubTitle>
      </Box>
      <Box
        w='100%'
        h='max-content'
        mt='15px'
        pb='20px'
        pl={'20px'}
        style={{
          overflowX: 'scroll',
          overflowY: 'hidden',
        }}
      >
        {movieDetail.credits.cast.map(actor => {
          return (
            <Box w='max-content' mr='28px'>
              {actor.profile_path ? (
                <CastImage
                  key={actor.id}
                  alt={actor.name}
                  src={`${imageInstanceFace}${actor.profile_path}`}
                  width={66}
                  height={66}
                />
              ) : (
                <ImagePlaceholder />
              )}
              <Box w='100%' h='max-content' flexDirection='column' pl='4px'>
                <TitleCast>{actor.name}</TitleCast>
                <AltSubTitle>{actor.character}</AltSubTitle>
              </Box>
            </Box>
          )
        })}
      </Box>
    </React.Fragment>
  )
}

export default Movie
