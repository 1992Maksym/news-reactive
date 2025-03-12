import React from 'react'
import classes from './Image.module.scss'

interface Image{image: string}

export default function Image({image}: Image){
    return(
        <div className={classes.imageWrapper}>
            {image ? <img src={image} className={classes.image}/> : null}
        </div>
    )
}