import classes from './Main.module.scss'
import { useEffect, useState } from 'react'
import {getNews, getCategories} from '../../api/apiNews'
import Banner from '../../components/Banner/Banner'
import NewsList from '../../components/NewsList/NewsList'
import Skeleton from '../../components/Skeleton/Skeleton'
import Pagination from '../../components/Pagination/Pagination'
import Filters from '../../components/Filters/Filters'

export default function Main(){
    const [news, setNews] = useState()
    const [currentPage, setCurrentPage] = useState(1)
    const [categories, setCategories] = useState()
    const [currentCategory, setCurrentCategory] = useState('all')
    const pageSize = 10
    const paginationPages = 10

    const fetchData = async (currentPage) => {
        try {
            const news = await getNews({
                page_number: currentPage, 
                page_size: pageSize,
                category: currentCategory === 'all' ? categories : currentCategory
            })
            setNews(news.news)
        } catch (error) {
            console.log(error)
        }
    }
    const fetchCategories = async () => {
        try {
            const response = await getCategories()
            setCategories(['all', ...response.categories])
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=> {
        fetchCategories()
    },[])

    useEffect(()=> {
        fetchData(currentPage)
    },[currentPage,currentCategory])

    const clickBtn = (index) => {
        setCurrentPage(index)
    }
    const clickRightArrow = () => {
        if(currentPage < paginationPages) setCurrentPage(currentPage + 1)
    }
    const clickLeftArrow = () => {
        if(currentPage > 1) setCurrentPage(currentPage - 1)
    }

    

    return (
        <main className={classes.main}>
            { news ? 
                <>
                    <Filters
                        categories={categories}
                        setCurrentCategory={setCurrentCategory}
                        currentCategory={currentCategory}
                    />
                    <Banner item={news[0]} />
                    <Pagination 
                        paginationPages={paginationPages} 
                        currentPage={currentPage}
                        clickBtn={clickBtn}
                        clickRightArrow={clickRightArrow}
                        clickLeftArrow={clickLeftArrow}
                    />
                    <NewsList list={news} />
                </> : <Skeleton/>
            }
        </main>
    )
}
