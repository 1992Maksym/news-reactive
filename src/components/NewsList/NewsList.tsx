import React from 'react'
import { INews } from '../../interfaces'
import NewsItem from '../NewsItem/NewsItem'
import classes from './NewsList.module.scss'

interface Props{list : INews[]}

export default function NewsList({list}: Props){
    return(
        <ul className={classes.list}>
            {list.map((item) => { 
                return <NewsItem item={item} key={item.id} />
            })}
        </ul>
    )
}