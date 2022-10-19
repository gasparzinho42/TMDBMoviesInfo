import styled, { CSSProperties } from 'styled-components'
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
}
export const BoxStyled = styled.div<BoxProps>`
  display: flex;
  background-color: ${props => `${props.bgColor}` || null};
  background-image: ${props => `url(${props.backgroundImageURL})` || null};
  flex-direction: ${props => props.flexDirection || 'row'};
  justify-content: ${props => props.justifyContent || null};
  align-items: ${props => props.alignItems || null};
  flex-wrap: ${props => props.flexWrap || null};
  column-gap: ${props => props.columnGap || null};
  row-gap: ${props => props.rowGap || null};
  margin-bottom: ${props => props.mb || null};
  margin-top: ${props => props.mt || null};
  margin-left: ${props => props.ml || null};
  margin-right: ${props => props.mr || null};
  padding-bottom: ${props => props.pb || null};
  padding-top: ${props => props.pt || null};
  padding-left: ${props => props.pl || null};
  padding-right: ${props => props.pr || null};
  min-width: ${props => props.minw || null};
  min-height: ${props => props.minh || null};
  height: ${props => props.h || null};
  width: ${props => props.w || null};
`
