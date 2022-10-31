import styled from 'styled-components'
import { colors } from '../../utils/colors'

export const HeaderContainer = styled.header`
  height: fit-content;
  width: 100%;
  background-color: ${colors.modalBackgroundBlack};
  padding: 10px 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  & > a > img {
    margin-left: 10px;
  }
`
