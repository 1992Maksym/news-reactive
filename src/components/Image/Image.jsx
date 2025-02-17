import classes from './Image.module.scss'

export default function Image({image}){
    return(
        <div className={classes.imageWrapper}>
            {image ? <img src={image} className={classes.image}/> : null}
        </div>
    )
}