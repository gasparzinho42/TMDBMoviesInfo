import styled from 'styled-components'

export const FilmRollImagePlaceholder = styled.div`
  cursor: pointer;
  width: 96%;
  aspect-ratio: 16/9;
  border-radius: 4px;
  background-color: red;
  transition: transform 450ms;
  &:hover {
    transform: scale(1.08);
  }
`
