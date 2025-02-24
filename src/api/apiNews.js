import axios from 'axios'

const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL
// const API_KEY = import.meta.env.VITE_NEWS_API_KEY

export const getNews = async ({
  page_number,
  page_size,
  category,
  keywords,
}) => {
  try {
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
// export default getNews
