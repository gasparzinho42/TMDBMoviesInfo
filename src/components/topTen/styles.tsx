import styled from 'styled-components'

export const TopTenContainer = styled.div`
  display: flex;
  position: relative;
`
export const TopTenPoster = styled.img`
  cursor: pointer;
  width: 96%;
  border-radius: 4px;
  object-fit: cover;
  transition: transform 450ms;
  &:hover {
    transform: scale(1.08);
  }
`
export const TopTenNumber = styled.img`
  cursor: pointer;
  width: 96%;
  border-radius: 4px;
  object-fit: cover;
  transition: transform 450ms;
  &:hover {
    transform: scale(1.08);
  }
`
