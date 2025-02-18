import formatTimeAgo from '../../helpers/formatTimeAgo'
import classes from './NewsItem.module.scss'

export default function NewsItem({item}){
    return(
        <li className={classes.newsItem}>
            <div className={classes.imgWrapper} style={{backgroundImage: `url(${item.image})`}}></div>
            <div className={classes.itemInfo}>
                <h3 className={classes.itemTitle}>{item.title}</h3>
                <p className={classes.itemExtra}>{formatTimeAgo(item.published)} by {item.author}</p>
            </div>
        </li>
    )
}