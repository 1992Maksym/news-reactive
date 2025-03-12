import React from 'react'
import formatTimeAgo from '../../helpers/formatTimeAgo'
import { INews } from '../../interfaces'
import Image from '../Image/Image'
import classes from './Banner.module.scss'

interface Props{item: INews}

export default function Banner({item}: Props){
    
    return(
        <div className={classes.banner}>
            <Image image={item?.image} />
            <div className={classes.title}>{item.title}</div>
            <div className={classes.date}>{formatTimeAgo(item.published)} by {item.author}</div>
        </div>
    )
}