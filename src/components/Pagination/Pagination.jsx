import classes from './Pagination.module.scss'

export default function Pagination({paginationPages,currentPage,clickBtn,clickLeftArrow,clickRightArrow,}){
    const rt = ()=>{
        console.log('blabla')
    }

    return(
        <div className={classes.paginationBlock}>
            <button disabled={currentPage<=1} onClick={clickLeftArrow} className={classes.paginationArrow}>{'<'}</button>
            {[...Array(paginationPages)].map((_,index) => {
                return <button 
                            key={index} 
                            onClick={() => clickBtn(index + 1)} 
                            className={classes.paginationButton}
                            disabled={currentPage === index + 1}
                        >{index + 1}</button>
            })}
            <button disabled={currentPage>=paginationPages} onClick={clickRightArrow} className={classes.paginationArrow}>{'>'}</button>
        </div>
    )
}