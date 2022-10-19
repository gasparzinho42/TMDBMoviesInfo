import styled from 'styled-components'

export const FilmRollContainer = styled.div``
export const FilmRollTitle = styled.span`
  font-family: 'NetflixSans-Bold', 'Helvetica Neue', Helvetica, sans-serif;
  height: fit-content;
  margin-bottom: 20px;
  color: white;
  font-size: 22px;
  margin-bottom: 15px;
  margin-top: 5px;
  margin-left: 5px;
`
export const FilmRollScroll = styled.section`
  width: 100%;
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  padding: 50px;
  align-items: center;
  &::-webkit-scrollbar {
    display: none;
  }
`
export const FilmRollCard = styled.div`
  border-radius: 4px;
  width: 96%;
  & > img {
    cursor: pointer;
    width: 100%;
    object-fit: cover;
    transition: transform 450ms;
    &:hover {
      transform: scale(1.08);
    }
  }
`

export const BackButton = styled.a`
  text-decoration: none;
  & > img {
    height: 20px;
    width: 20px;
    transform: rotate(180deg);
  }
`
export const FowardButton = styled.a`
  text-decoration: none;
  & > img {
    height: 20px;
    width: 20px;
  }
`
