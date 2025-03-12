import { useEffect, useState } from 'react'

export const debounceTime = (value: string | null, time: number) => {
  const [debounceValue, setDebounceValue] = useState<string | null>()

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
