import { AxiosRequestConfig } from 'axios'
import React, { useEffect, useMemo, useState } from 'react'
import TopTen from '../../components/topTen'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import {
  apiInstance,
  imageInstance,
  netflixNumbers,
} from '../../common/baseURLS'

import { FilmRollCard, FilmRollTitle } from './styles'

interface FilmRollProps {
  title: string
  fetchURL: string
  isTopTen?: boolean
}
interface films {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video?: boolean
  vote_average: number
  vote_count: number
}
const FilmRoll: React.FC<FilmRollProps> = ({ title, fetchURL, isTopTen }) => {
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
  const [data, setData] = useState<films[]>([])
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
  return (
    <div style={{ paddingLeft: 20 }}>
      <FilmRollTitle>{title}</FilmRollTitle>
      <Carousel responsive={responsive} infinite partialVisible={true}>
        {isTopTen
          ? data?.map((film, index) => {
              return (
                <TopTen
                  key={index}
                  number={index + 1}
                  posterImageURl={`${imageInstance}${film.poster_path}`}
                />
              )
            })
          : data?.map((film, index) => {
              return (
                <FilmRollCard
                  key={index}
                  src={`${imageInstance}${film.backdrop_path}`}
                />
              )
            })}
        {}
      </Carousel>
    </div>
  )
}

export default FilmRoll
