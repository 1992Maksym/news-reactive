import classes from './Filters.module.scss'

export default function Filters({categories,setCurrentCategory,currentCategory}) {
    return(
        <div className={classes.filters}>
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
}