import React, { CSSProperties } from 'react'
import { BoxStyled } from './styles'
interface BoxProps {
  w: CSSProperties['width']
  h?: CSSProperties['height']
  minw?: CSSProperties['minWidth']
  minh?: CSSProperties['minHeight']
  mb?: CSSProperties['marginBottom']
  mt?: CSSProperties['marginTop']
  ml?: CSSProperties['marginLeft']
  mr?: CSSProperties['marginRight']
  pb?: CSSProperties['paddingBottom']
  pt?: CSSProperties['paddingTop']
  pl?: CSSProperties['paddingLeft']
  pr?: CSSProperties['paddingRight']
  flexDirection?: CSSProperties['flexDirection']
  justifyContent?: CSSProperties['justifyContent']
  alignItems?: CSSProperties['alignItems']
  flexWrap?: CSSProperties['flexWrap']
  columnGap?: CSSProperties['columnGap']
  rowGap?: CSSProperties['rowGap']
  backgroundImageURL?: CSSProperties['backgroundImage']
  bgColor?: CSSProperties['backgroundColor']
  children: JSX.Element[] | JSX.Element
  style?: CSSProperties
}
const Box: React.FC<BoxProps> = ({ children, ...props }) => {
  return (
    <BoxStyled style={props.style} {...props}>
      {children}
    </BoxStyled>
  )
}

export default Box
