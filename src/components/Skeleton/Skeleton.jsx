import classes from './Skeleton.module.scss'

export default function Skeleton(){
    return(
        // <div className={classes.loaderWrapper}>
            <div className={classes.loader}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        // </div>
        
    )
}