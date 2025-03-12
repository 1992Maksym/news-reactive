import axios from 'axios'
import { ParamsType } from '../interfaces'

const BASE_URL: string = import.meta.env.VITE_NEWS_BASE_API_URL
// const API_KEY = import.meta.env.VITE_NEWS_API_KEY

export const getNews = async <T,P>(params? : ParamsType<T,P>) => {
  try {
    const {
      page_number,
      page_size,
      category,
      keywords,
    } = params || {}
    const response = await axios.get(`${BASE_URL}search`, {
      params: {
        // API_KEY is not working here
        apiKey: '0beVXFRSLYHjbJpNQQ2RFboSWVh2RmYzgAMLiQQsXpv2FEUr',
        page_number,
        page_size,
        category,
        keywords,
      },
    })
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export const getCategories = async () => {
  try {
    const response = await axios.get(`${BASE_URL}available/categories`, {
      params: {
        // API_KEY is not working here
        apiKey: '0beVXFRSLYHjbJpNQQ2RFboSWVh2RmYzgAMLiQQsXpv2FEUr',
      },
    })
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export default { getNews, getCategories }
