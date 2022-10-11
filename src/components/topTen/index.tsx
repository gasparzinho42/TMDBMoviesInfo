import React from 'react'
import { netflixNumbers } from '../../common/baseURLS'

import Box from '../box'
import { TopTenContainer, TopTenPoster, TopTenNumber } from './styles'
interface FilmRollProps {
  number: number
  posterImageURl: string
}
const TopTen: React.FC<FilmRollProps> = ({ number, posterImageURl }) => {
  return (
    <TopTenContainer>
      <TopTenNumber src={netflixNumbers(number)} />
      <TopTenPoster src={posterImageURl} />
    </TopTenContainer>
  )
}
export default TopTen
