import classes from './Filters.module.scss'

export default function Filters({categories,setCurrentCategory,currentCategory}) {
    return(
        <div className={classes.filters}>
            {categories.map(category => { 
                return <button 
                            key={category}
                            className={category===currentCategory?classes.active:classes.category}
                            onClick={() => setCurrentCategory(category)}
                        >{category}</button>
            })}
        </div>
    )
}