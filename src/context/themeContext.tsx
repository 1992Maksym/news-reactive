import { createContext, useContext } from "react"

interface contextType{
  isDark: boolean,
  toggleTheme: () => void
}
export const contextWrap = createContext<contextType | undefined>(undefined)

export const useTheme = () => {
    const context = useContext(contextWrap)

    if(!context) {
        throw Error
    } else {
        return context
    }

}