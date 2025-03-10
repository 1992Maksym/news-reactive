import React,{ useEffect, useRef } from 'react'
import classes from './Slider.module.scss'

export default function Slider({children}){
    const sliderRef = useRef(null)

    const handleArrow = (direction) => {
        if (direction === 'left') {
            sliderRef ? (sliderRef.current.scrollLeft -= 200) : null;
        } else {
            sliderRef ? (sliderRef.current.scrollLeft += 200) : null;
        }
      }


    return(
        <div className={classes.slider}>
            <button className={classes.arrow} onClick={()=>handleArrow('left')}>{`<`}</button>
            {React.cloneElement(children,{ref: sliderRef})}
            <button className={classes.arrow} onClick={()=>handleArrow('right')}>{`>`}</button>
        </div>
    )
}