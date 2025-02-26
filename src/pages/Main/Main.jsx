import classes from './Main.module.scss'
import { useState } from 'react'
import {getNews, getCategories} from '../../api/apiNews'
import Banner from '../../components/Banner/Banner'
import NewsList from '../../components/NewsList/NewsList'
import Skeleton from '../../components/Skeleton/Skeleton'
import Pagination from '../../components/Pagination/Pagination'
import Filters from '../../components/Filters/Filters'
import Search from '../../components/Search/Search'
import { debounceTime } from '../../hooks/debounceTime'
import { useFetch } from '../../hooks/useFetch'
import {PAGE_SIZE, PAGINATION_PAGES} from '../../constants/constants'
import { arrowClickHandler } from '../../hooks/arrowClickHandler'

export default function Main(){
    const [currentPage, setCurrentPage] = useState(1)
    const [currentCategory, setCurrentCategory] = useState(null)
    const [keyWords, setKeyWords] = useState("")


    const debounceKeyword = debounceTime(keyWords, 1000)

    const {data: dataCategories, error: errorCategories} = useFetch(getCategories)

    const {data: dataNews, error: errorNews} = useFetch(getNews, {
        page_number: currentPage, 
        page_size: PAGE_SIZE,
        keywords: debounceKeyword,
        category: currentCategory
    })

    const {clickBtn, clickRightArrow, clickLeftArrow} = arrowClickHandler(currentPage,setCurrentPage,PAGINATION_PAGES)
    
    return (
        <main className={classes.main}>
            { dataNews ? 
                <>
                    <Filters
                        categories = {dataCategories.categories}
                        setCurrentCategory={setCurrentCategory}
                        currentCategory={currentCategory}
                    />
                    <Search 
                        keyWords = {keyWords}
                        setKeyWords = {setKeyWords}
                    />
                    <Banner item={dataNews.news[0]} />
                    <Pagination 
                        paginationPages={PAGINATION_PAGES} 
                        currentPage={currentPage}
                        clickBtn={clickBtn}
                        clickRightArrow={clickRightArrow}
                        clickLeftArrow={clickLeftArrow}
                    />
                    <NewsList list={dataNews.news} />
                </> : <Skeleton/>
            }
        </main>
    )
}
