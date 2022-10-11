import React from 'react'
import { CustomCardWrapper } from './styles'
interface CardWrapperProps {
  children: JSX.Element | JSX.Element[]
}
const CardWrapper: React.FC<CardWrapperProps> = ({ children }) => {
  return <CustomCardWrapper>{children}</CustomCardWrapper>
}

export default CardWrapper
