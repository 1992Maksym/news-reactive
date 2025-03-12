import React from 'react'
// import classes from './Filters.module.scss'
import { forwardRef } from 'react'
import classes from './Filters.module.scss'

interface Props{
    categories: string[] | null;
    setCurrentCategory: Function;
    currentCategory: string | null; 
}

const  Filters = forwardRef(({categories,setCurrentCategory,currentCategory}: Props, ref:React.Ref<HTMLDivElement> | undefined) => {

    return(
        <div ref={ref} className={classes.filters}>
            <button 
                onClick={() => setCurrentCategory(null)}
                className={currentCategory===null?classes.active:classes.category}
            >all</button>
            {categories?.map(category => { 
                return <button 
                            key={category}
                            className={category===currentCategory?classes.active:classes.category}
                            onClick={() => setCurrentCategory(category)}
                        >{category}</button>
            })}
        </div>
    )
})

export default Filters