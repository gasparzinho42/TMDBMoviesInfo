import { CSSProperties } from 'react'
import styled from 'styled-components'

interface MovieInfoProps {
  color: CSSProperties['color']
}
export const Poster = styled.img`
  border-radius: 8px 0px 0px 8px;
  margin-left: 10%;
  z-index: 999;
`
export const Title = styled.h1`
  font-family: 'NetflixSans-Bold', 'Helvetica Neue', Helvetica, sans-serif;
  color: white;
  font-weight: 700;
  font-size: 35px;
  margin-bottom: 0;
  > span {
    color: grey;
    font-weight: thin;
  }
`
export const TitleCast = styled.h1`
  font-family: 'NetflixSans-Bold', 'Helvetica Neue', Helvetica, sans-serif;
  color: white;
  font-weight: 700;
  font-size: 30px;
  margin: 0;
`
export const SubTitle = styled.h2`
  font-family: 'NetflixSans-Bold', 'Helvetica Neue', Helvetica, sans-serif;
  color: white;
  font-weight: 700;
  font-size: 20px;
  margin: 0;
`

export const AltSubTitle = styled.h2`
  font-family: 'NetflixSans-Bold', 'Helvetica Neue', Helvetica, sans-serif;
  color: grey;
  font-weight: normal;
  font-size: 13px;
  margin: 0;
`
export const Text = styled.p`
  color: white;
  font-weight: normal;
  font-size: 16px;
  margin: 0;
`
export const Percentage = styled.span<MovieInfoProps>`
  font-family: 'NetflixSans-Bold', 'Helvetica Neue', Helvetica, sans-serif;
  color: ${props => props.color};
  font-weight: normal;
  font-size: 20px;
`
