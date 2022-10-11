import styled from 'styled-components'
import { colors } from '../../utils/colors'

export const CustomCardWrapper = styled.div`
  min-width: 80px;
  max-width: 320px;
  height: 55%;
  background-color: ${colors.modalBackgroundBlack};
  border: none;
  border-radius: 4px;
  padding: 60px 68px 40px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 90px;
`
