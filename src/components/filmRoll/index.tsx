import { AxiosRequestConfig } from 'axios'
import React, { useCallback, useEffect, useState } from 'react'
import TopTen from '../../components/topTen'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import {
  apiInstance,
  imageInstance,
} from '../../common/baseURLS'

import { FilmRollCard, FilmRollTitle } from './styles'

interface FilmRollProps {
  title: string
  fetchURL: string
  isTopTen?: boolean
}
interface Films {
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
  const [data, setData] = useState<Films[]>([])
  const getDeviceType = () => {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
      return "tablet";
    }
    if (
      /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
        ua
      )
    ) {
      return "mobile";
    }
    return "desktop";
  };
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
    }else{
      return data?.map((film, index) => {
        return (
          <FilmRollCard
            key={film.id}
            src={`${imageInstance}${film.backdrop_path}`}
            loading={'lazy'}
          />
        )
      })
    }
    
  },[data])
  return (
    <div style={{ paddingLeft: 20 }}>
      <FilmRollTitle>{title}</FilmRollTitle>
      <Carousel responsive={responsive} infinite partialVisible={true} removeArrowOnDeviceType={["tablet", "mobile"]} deviceType={getDeviceType()} itemClass="carousel-item-padding-40-px">
      {checkIfIsTopTen()}
      </Carousel>
    </div>
  )
}

export default FilmRoll
