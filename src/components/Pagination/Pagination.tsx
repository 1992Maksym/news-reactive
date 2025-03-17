import React, { useContext } from 'react'
import classes from './Pagination.module.scss'
import { ArrowClick } from '../../interfaces'
import { useTheme } from '../../context/themeContext'

interface Props{
    paginationPages: number,
    currentPage: number,
    clickBtn: Function,
    clickLeftArrow: ArrowClick,
    clickRightArrow: ArrowClick,
}

export default function Pagination(
    {
        paginationPages,
        currentPage,
        clickBtn,
        clickLeftArrow,
        clickRightArrow,
    }: Props){

    const {isDark} = useTheme()

    return(
        <div className={`${classes.paginationBlock} ${isDark? classes.dark : classes.light}`}>
            <button 
                disabled={currentPage<=1} 
                onClick={clickLeftArrow} 
                className={classes.paginationArrow}
            >{'<'}</button>

            {[...Array(paginationPages)].map((_,index) => {
                return <button 
                            key={index} 
                            onClick={() => clickBtn(index + 1)} 
                            disabled={currentPage === index + 1}
                            className={`${classes.paginationButton} ${currentPage === index + 1 ? classes.active : false}`}
                        >{index + 1}</button>
            })}

            <button 
                disabled={currentPage>=paginationPages} 
                onClick={clickRightArrow} 
                className={classes.paginationArrow}
            >{'>'}</button>
        </div>
    )
}