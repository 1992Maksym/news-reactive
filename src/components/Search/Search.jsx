import classes from './Search.module.scss'

export default function Search({keyWords, setKeyWords}) {
    return(
        <div className={classes.search}>
            <input 
                type = "text" 
                className = {classes.input}
                value = {keyWords}
                onChange = {(e) => setKeyWords(e.target.value)}
                placeholder = 'latest news'
            />
        </div>
    )
}