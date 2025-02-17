import formatTimeAgo from '../../helpers/formatTimeAgo'
import Image from '../Image/Image'
import classes from './Banner.module.scss'

export default function Banner({item}){
    return(
        <div className={classes.banner}>
            <Image image={item?.image} />
            <div className={classes.title}>{item.title}</div>
            <div className={classes.date}>{formatTimeAgo(item.published)} by {item.author}</div>
        </div>
    )
}