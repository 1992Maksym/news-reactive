import React from 'react'
import classes from './Pagination.module.scss'
import { ArrowClick } from '../../interfaces'

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

    return(
        <div className={classes.paginationBlock}>
            <button 
                disabled={currentPage<=1} 
                onClick={clickLeftArrow} 
                className={classes.paginationArrow}
            >{'<'}</button>

            {[...Array(paginationPages)].map((_,index) => {
                return <button 
                            key={index} 
                            onClick={() => clickBtn(index + 1)} 
                            className={classes.paginationButton}
                            disabled={currentPage === index + 1}
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