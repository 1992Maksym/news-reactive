import classes from './Main.module.scss'
import { useEffect, useState } from 'react'
import getNews from '../../api/apiNews'
import Banner from '../../components/Banner/Banner'
import NewsList from '../../components/NewsList/NewsList'
import Skeleton from '../../components/Skeleton/Skeleton'
import Pagination from '../../components/Pagination/Pagination'

export default function Main(){
    const [news, setNews] = useState()
    const [currentPage, setCurrentPage] = useState(1)
    const pageSize = 10
    const paginationPages = 10

    const fetchData = async (currentPage) => {
        try {
            const news = await getNews(currentPage, pageSize)
            setNews(news.news)
        } catch (error) {
            console.log(error)
        }
    }

    const clickBtn = (index) => {
        setCurrentPage(index)
    }
    const clickRightArrow = () => {
        if(currentPage < paginationPages) setCurrentPage(currentPage + 1)
    }
    const clickLeftArrow = () => {
        if(currentPage > 1) setCurrentPage(currentPage - 1)
    }

    useEffect(()=> {
        fetchData(currentPage)
    },[currentPage])

    return (
        <main className={classes.main}>
            { news ? 
                <>
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
