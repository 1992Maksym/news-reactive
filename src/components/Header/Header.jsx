import classes from './Header.module.scss'
import formatDate from '../../helpers/date'

export default function Header(){
    return(
        <header className={classes.header}>
            <div className={classes.logo}>News Rective</div>
            <div className={classes.date}>{formatDate(new Date())}</div>
        </header>
    )
}