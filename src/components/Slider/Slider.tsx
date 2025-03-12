import React,{ Ref, useEffect, useRef } from 'react'
import classes from './Slider.module.scss'

export default function Slider({children}){
    const sliderRef = useRef<HTMLElement | null>(null)

    const handleArrow = (direction) => {
        if (direction === 'left') {
            sliderRef.current ? (sliderRef.current.scrollLeft -= 200) : null;
        } else {
            sliderRef.current ? (sliderRef.current.scrollLeft += 200) : null;
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