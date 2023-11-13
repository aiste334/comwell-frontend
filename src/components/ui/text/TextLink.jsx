import Link from 'next/link'
import React from 'react'
import Paragraph from './Paragraph'

const TextLink = ({ className, href, ...otherProps }) => {
  const Type = href ? Link : Paragraph
  return (
    <Type className={`text-sm underline text-active-black cursor-pointer font-semibold w-fit ${className}`} {...otherProps}/>
  )
}

export default TextLink