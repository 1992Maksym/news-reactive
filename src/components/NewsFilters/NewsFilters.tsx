import React from "react"
import Filters from "../Filters/Filters"
import Search from "../Search/Search"
import { KeyWords } from "../../interfaces"

interface Props{
    setCurrentCategory: Function,
    currentCategory: string | null,
    keyWords: KeyWords,
    setKeyWords: Function,
    categories: string[] | null
}

export default function NewsFilters({
    setCurrentCategory,
    currentCategory,
    keyWords,
    setKeyWords,
    categories
}: Props){

    return(
        <>
            <Filters
                categories = {categories}
                setCurrentCategory={setCurrentCategory}
                currentCategory={currentCategory}
            />
            <Search 
                keyWords = {keyWords}
                setKeyWords = {setKeyWords}
            />
        </>
    )
}
