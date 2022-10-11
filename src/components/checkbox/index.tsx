import React from 'react'
import Box from '../box'
import { Label } from './styles'

interface CheckboxProps {
  label: string
  id: string
  name: string
  onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void
}
const Checkbox: React.FC<CheckboxProps> = ({ label, id, name, onChange }) => {
  return (
    <Box w='100%' justifyContent='flex-start'>
      <input type='checkbox' name={name} id={id} onChange={onChange} />
      <Label htmlFor={id}>{label}</Label>
    </Box>
  )
}

export default Checkbox
