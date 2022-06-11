import React from 'react'
import { string } from 'prop-types'
import { Link } from 'gatsby'

const Image = ({svg, alt, link, classNames})=>{
    return (
    <Link href={link}>
      <img src={svg} alt={alt}  className={classNames}/>
    </Link>
    )
}

Image.propTypes = {
    link: string,
    alt: string.isRequired,
    classNames: string,
}


export default Image