import React from 'react'
import { CustomButton } from './styles'
interface ButtonProps {
  title: string
  onClick: (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}
const Button: React.FC<ButtonProps> = ({ title, onClick }) => {
  return <CustomButton onClick={onClick}>{title}</CustomButton>
}
export default Button
