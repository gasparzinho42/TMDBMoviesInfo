import React from 'react'
import {
  imageInstanceBackdrop,
  imageInstanceFace,
  imageInstancePoster,
} from '../../../../common/baseURLS'
import { IGetTvDetail } from '../../../../common/interfaces'
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

interface ITvProps {
  tvDetail: IGetTvDetail | undefined
}
const Tv: React.FC<ITvProps> = ({ tvDetail }) => {
  if (!tvDetail?.id) {
    return <span style={{ color: 'white' }}>Carregando...</span>
  }
  return (
    <React.Fragment>
      <Box
        w='100%'
        flexDirection='row'
        backgroundImageURL={`${imageInstanceBackdrop}${tvDetail.backdrop_path}`}
        style={{
          backgroundPosition: '(right - 200px) top',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
        pt='30px'
        pb='30px'
        mb='12px'
      >
        <Poster
          src={`${imageInstancePoster}${tvDetail.poster_path}`}
          alt='Movie image'
        />
        <Box
          w='50%'
          flexDirection='column'
          pl='20px'
          pb='10px'
          bgColor={colors.modalBackgroundBlack}
          style={{ borderRadius: '0px 8px 8px 0px' }}
        >
          <Title>
            {tvDetail.name}
            <span> ({movie.getReleaseDate(tvDetail.first_air_date)})</span>
          </Title>
          <Box w='100%'>
            <Box w='max-content' alignItems='center' pl='5px'>
              {tvDetail?.genres?.map((genre, index, array) => {
                return (
                  <Genre
                    genre={movie.genreAddComma(array.length, index, genre.name)}
                    key={index}
                  />
                )
              })}
            </Box>
            <Box w='max-content' alignItems='center'>
              {tvDetail.episode_run_time.length > 0 && (
                <AltSubTitle>
                  ·{' '}
                  {movie.convertMinutes(
                    movie.getEpisodesTotalRunTime(tvDetail.episode_run_time)
                  )}
                </AltSubTitle>
              )}
            </Box>
          </Box>
          <Box
            w='100%'
            alignItems='flex-start'
            flexDirection='column'
            pl='5px'
            mt='2px'
          >
            <AltSubTitle>
              {tvDetail.number_of_episodes}
              {tvDetail.number_of_episodes > 1 ? ' episódios' : ' episódio'}
            </AltSubTitle>
            <AltSubTitle>
              {tvDetail.number_of_seasons}
              {tvDetail.number_of_seasons > 1 ? ' temporadas' : ' temporada'}
            </AltSubTitle>
          </Box>
          <Box
            w='100%'
            alignItems='flex-start'
            flexDirection='column'
            pl='5px'
            mt='10px'
          >
            <Text>
              <Percentage
                color={movie.getPercentageColor(tvDetail.vote_average)}
              >
                {movie.getPercentage(tvDetail.vote_average)}%
              </Percentage>{' '}
              de aceitação do público
            </Text>
          </Box>

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
            <Text>{tvDetail.overview}</Text>
          </Box>
          {tvDetail.created_by.length > 0 && (
            <Box w='100%' flexDirection='column' pl='5px'>
              <SubTitle>Criadores</SubTitle>
              <Box w='100%'>
                {tvDetail.created_by.map(creator => {
                  return (
                    <Box w='max-content' mr='5px' alignItems='center'>
                      {creator.profile_path ? (
                        <CastImage
                          key={creator.id}
                          alt={creator.name}
                          src={`${imageInstanceFace}${creator.profile_path}`}
                          width={66}
                          height={66}
                        />
                      ) : (
                        <ImagePlaceholder />
                      )}
                      <Box
                        w='100%'
                        h='max-content'
                        flexDirection='column'
                        pl='4px'
                      >
                        <TitleCast>{creator.name}</TitleCast>
                      </Box>
                    </Box>
                  )
                })}
              </Box>
            </Box>
          )}
        </Box>
      </Box>
      <Box w='100%' alignItems='center' columnGap='5px' pl='15px'>
        <MainTitle>Elenco</MainTitle>
        <AltSubTitle>({tvDetail.credits.cast.length})</AltSubTitle>
      </Box>
      <Box
        w='100%'
        h='max-content'
        mt='15px'
        pb='20px'
        pl='20px'
        style={{
          overflowX: 'scroll',
          overflowY: 'hidden',
        }}
      >
        {tvDetail?.credits?.cast?.map(actor => {
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

export default Tv
