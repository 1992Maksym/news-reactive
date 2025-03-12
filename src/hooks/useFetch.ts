import { useEffect, useState } from 'react'
import { FetchFunc, UseFetchResult } from "../interfaces"

export const useFetch = <T,P>(fetchFunction: FetchFunc<T,P>, params?: P):UseFetchResult<T> => {

  const [data, setData] = useState<T | null>(null)
  const [error, setError] = useState(null)
  const stringParams = params ? new URLSearchParams(params).toString() : null

  const request = async () => {
    try {
      const result = await fetchFunction(params)
      setData(result)
    } catch (error) {
      setError(error)
    }
  }

  useEffect(() => {
    request()
  }, [fetchFunction, stringParams])

  return { data, error }
}
