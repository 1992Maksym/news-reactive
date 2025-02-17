import axios from "axios"

const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL
// const API_KEY = import.meta.env.VITE_NEWS_API_KEY
const lastNews = BASE_URL + 'latest-news'

const getNews = async () => {
    try {
        const response = await axios.get(lastNews,{
            params: {
                // API_KEY is not working here
                apiKey: "0beVXFRSLYHjbJpNQQ2RFboSWVh2RmYzgAMLiQQsXpv2FEUr"
            }
        })
        return response.data
    } catch (error) {
        console.log(error)
    }
   
}

export default getNews

