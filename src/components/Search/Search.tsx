import React from 'react'
import classes from './Search.module.scss'
import { KeyWords } from '../../interfaces'

interface Props{
    keyWords: KeyWords,
    setKeyWords: Function
}

export default function Search({keyWords, setKeyWords}: Props) {
    return(
        <div className={classes.search}>
            <input 
                type = "text" 
                className = {classes.input}
                value = {keyWords}
                onChange = {(e) => setKeyWords(e.target.value)}
                placeholder = 'latest news'
            />
        </div>
    )
}