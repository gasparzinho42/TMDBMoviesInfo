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
  color: white;
  font-weight: 700;
  font-size: 35px;
  > span {
    color: grey;
    font-weight: thin;
  }
`
export const SubTitle = styled.h2`
  color: white;
  font-weight: 700;
  font-size: 20px;
`
export const Text = styled.p`
  color: white;
  font-weight: normal;
  font-size: 16px;
  margin: 0;
`
export const Percentage = styled.span<MovieInfoProps>`
  color: ${props => props.color};
  font-weight: normal;
  font-size: 20px;
`
