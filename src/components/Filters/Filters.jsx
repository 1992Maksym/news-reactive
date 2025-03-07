import { forwardRef } from 'react'
import classes from './Filters.module.scss'

const  Filters = forwardRef(({categories,setCurrentCategory,currentCategory}, ref) => {
    return(
        <div ref={ref} className={classes.filters}>
            <button 
                onClick={() => setCurrentCategory(null)}
                className={currentCategory===null?classes.active:classes.category}
            >all</button>
            {categories.map(category => { 
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