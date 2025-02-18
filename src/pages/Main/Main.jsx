import classes from './Main.module.scss'
import { useEffect, useState } from 'react'
import getNews from '../../api/apiNews'
import Banner from '../../components/Banner/Banner'
import NewsList from '../../components/NewsList/NewsList'
import Skeleton from '../../components/Skeleton/Skeleton'

export default function Main(){
    const [news, setNews] = useState()
    useEffect(()=> {
        const fetchData = async () => {
            try {
                const news = await getNews()
                setNews(news.news)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    },[])
    return (
        <main className={classes.main}>
            { news ? 
                <>
                    <Banner item={news[0]} />
                    <NewsList list={news} />
                </> : <Skeleton/>
            }
        </main>
    )
}