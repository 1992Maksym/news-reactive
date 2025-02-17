import NewsItem from '../NewsItem/NewsItem'
import classes from './NewsList.module.scss'

export default function NewsList({list}){
    return(
        <ul className={classes.list}>
            {list.map((item) => { 
                return <NewsItem item={item} key={item.id} />
            })}
        </ul>
    )
}