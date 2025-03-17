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
        apiKey: 'knnQvKS8z2kkDe6LTTFppsn_w2chDGNnpF56Wo3Pikcl2P4x',
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
        apiKey: 'knnQvKS8z2kkDe6LTTFppsn_w2chDGNnpF56Wo3Pikcl2P4x',
      },
    })
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export default { getNews, getCategories }
