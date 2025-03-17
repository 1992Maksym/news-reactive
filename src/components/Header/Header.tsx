import classes from './Header.module.scss'
import formatDate from '../../helpers/date'
import React from 'react'
import {themeImages} from '../../assets/theme/themeImgToggle'
import { useTheme } from '../../context/themeContext'

export default function Header(){
    const {isDark, toggleTheme} = useTheme()
    return(
        <header className={`${classes.header} ${isDark ? classes.dark : classes.light}`}>
            <div className={classes.info}>
                <div className={classes.logo}>News Rective</div>
                <div className={classes.date}>{formatDate(new Date())}</div>
            </div>
            <img
                className={classes.themeImg} 
                src={isDark ? themeImages.dark : themeImages.light} 
                alt="theme-icon" 
                onClick={toggleTheme}
            />
        </header>
    )
}