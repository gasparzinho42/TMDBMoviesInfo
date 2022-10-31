import React from 'react'
import { GenreContainer } from './styles'

// import { Container } from './styles';
interface genreContainerProps {
  genre: string
}
const Genre: React.FC<genreContainerProps> = ({ genre }) => {
  return <GenreContainer>{genre}</GenreContainer>
}

export default Genre
