import { CSSProperties } from 'react'
import styled from 'styled-components'
interface TextProps {
  altColor?: CSSProperties['color']
}
export const CustomSpan = styled.span<TextProps>`
  color: ${props => (props.altColor ? `${props.altColor}` : '#b3b3b3')};
  font-size: 13px;
  font-family: 'Helvetica Neue', 'Helvetica', Arial, sans-serif;
`
