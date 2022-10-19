import { AxiosRequestConfig } from 'axios'
import React, { useCallback, useContext, useEffect, useState } from 'react'
import TopTen from '../../components/topTen'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { apiInstance, imageInstance } from '../../common/baseURLS'
import { FilmRollCard, FilmRollTitle } from './styles'
import { useNavigate } from 'react-router-dom'
import { TMDBContext } from '../../context'

interface IFilmRollProps {
  title: string
  fetchURL: string
  isTopTen?: boolean
}
export interface IFilm {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title?: string
  original_name?: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title?: string
  name?: string
  first_air_date?: string
  video?: boolean
  vote_average: number
  vote_count: number
}
const FilmRoll: React.FC<IFilmRollProps> = ({ title, fetchURL, isTopTen }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      slidesToSlide: 5,
      partialVisibilityGutter: 9,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
      slidesToSlide: 3,
      partialVisibilityGutter: 9,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
      slidesToSlide: 2,
      partialVisibilityGutter: 9,
    },
  }
  const navigate = useNavigate()
  const { setSelectedMovie } = useContext(TMDBContext)
  const [data, setData] = useState<IFilm[]>([])
  const getDeviceType = () => {
    const userAgent = navigator.userAgent
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(userAgent)) {
      return 'tablet'
    }
    if (
      /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
        userAgent
      )
    ) {
      return 'mobile'
    }
    return 'desktop'
  }
  const FilmListData = async () => {
    const requestConfig: AxiosRequestConfig<any> = {
      url: fetchURL,
      method: 'get',
    }
    const results = await apiInstance.request(requestConfig)
    const res = isTopTen
      ? results.data.results.splice(10)
      : results.data.results
    setData(res)
  }

  useEffect(() => {
    FilmListData()
  }, [])
  const checkIfIsTopTen = useCallback(() => {
    if (isTopTen) {
      return data.map((film, index) => {
        return (
          <TopTen
            key={film.id}
            number={index + 1}
            posterImageURl={`${imageInstance}${film.poster_path}`}
          />
        )
      })
    } else {
      return data?.map((film, index) => {
        return (
          <FilmRollCard>
            <img
              key={film.id}
              alt={film.name || film.title}
              src={`${imageInstance}${film.poster_path}`}
              onClick={() => {
                setSelectedMovie(film)
                navigate('/movie')
              }}
            />
          </FilmRollCard>
        )
      })
    }
  }, [data])
  return (
    <>
      <FilmRollTitle>{title}</FilmRollTitle>
      <div style={{ paddingLeft: 20 }}>
        <Carousel
          responsive={responsive}
          infinite={!isTopTen}
          partialVisible={true}
          removeArrowOnDeviceType={['tablet', 'mobile']}
          deviceType={getDeviceType()}
          itemClass='carousel-item-padding-40-px'
        >
          {checkIfIsTopTen()}
        </Carousel>
      </div>
    </>
  )
}

export default FilmRoll
