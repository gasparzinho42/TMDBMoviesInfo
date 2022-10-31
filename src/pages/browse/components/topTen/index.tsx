import React from 'react'
import { netflixNumbers } from '../../../../common/baseURLS'

import { TopTenContainer, TopTenPoster, TopTenNumber } from './styles'
interface FilmRollProps {
  number: number
  posterImageURl: string
  onClick: (evt: React.MouseEvent<HTMLImageElement, MouseEvent>) => void
}
const TopTen: React.FC<FilmRollProps> = ({
  number,
  posterImageURl,
  onClick,
}) => {
  return (
    <TopTenContainer>
      <TopTenNumber src={netflixNumbers(number)} />
      <TopTenPoster src={posterImageURl} onClick={onClick} />
    </TopTenContainer>
  )
}
export default TopTen
