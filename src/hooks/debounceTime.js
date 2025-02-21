import { useEffect, useState } from 'react'

export const debounceTime = (value, time) => {
  const [debounceValue, setDebounceValue] = useState()

  useEffect(() => {
    const hendler = setTimeout(() => {
      setDebounceValue(value)
    }, time)

    return () => {
      clearTimeout(hendler)
    }
  }, [value, time])

  return debounceValue
}
