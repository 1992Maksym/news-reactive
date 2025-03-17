import classes from './Slider.module.scss'
import React,{ useRef } from 'react'
import { useTheme } from '../../context/themeContext'

export default function Slider({children}){
    const {isDark} = useTheme()
    const sliderRef = useRef<HTMLElement | null>(null)

    const handleArrow = (direction) => {
        if (direction === 'left') {
            sliderRef.current ? (sliderRef.current.scrollLeft -= 200) : null;
        } else {
            sliderRef.current ? (sliderRef.current.scrollLeft += 200) : null;
        }
      }


    return(
        <div className={`${classes.slider} ${isDark ? classes.dark : classes.light}`}>
            <button className={classes.arrow} onClick={()=>handleArrow('left')}>{`<`}</button>
            {React.cloneElement(children,{ref: sliderRef})}
            <button className={classes.arrow} onClick={()=>handleArrow('right')}>{`>`}</button>
        </div>
    )
}