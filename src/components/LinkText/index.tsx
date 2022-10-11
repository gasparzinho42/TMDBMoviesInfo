import React from 'react'
import { Link } from './styles'

interface LinkTextProps {
  label: string
  href: string
}
const LinkText: React.FC<LinkTextProps> = ({ label, href }) => {
  return <Link href={href}>{label}</Link>
}

export default LinkText
