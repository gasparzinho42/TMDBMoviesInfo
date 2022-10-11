import React, { CSSProperties } from 'react'
import { CustomSpan } from './styles'

interface TextProps {
  label: string
  altColor?: CSSProperties['color']
}
const Text: React.FC<TextProps> = ({ label, altColor }) => {
  return <CustomSpan altColor={altColor}>{label}</CustomSpan>
}

export default Text
