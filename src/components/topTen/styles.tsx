import styled from 'styled-components'

export const TopTenContainer = styled.div`
  display: flex;
  position: relative;
  width: 100%
`
export const TopTenPoster = styled.img`
  cursor: pointer;
  height: 130px;
  position: relative;
  width: 50%;
  left: 77px;
  border-radius: 4px;
  object-fit: cover;
  transition: transform 450ms;
  &:hover {
    transform: scale(1.08);
  }
`
export const TopTenNumber = styled.img`
  cursor: pointer;
  width: 50%;
  height: 120%;
  position: absolute;
  left: 0;
  bottom: -11px;
  border-radius: 4px;
  object-fit: cover;
  transition: transform 450ms;
  &:hover {
    transform: scale(1.08);
  }
`
