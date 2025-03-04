import Filters from "../Filters/Filters"
import Search from "../Search/Search"
import { getCategories } from "../../api/apiNews"

export default function NewsFilters({
    setCurrentCategory,
    currentCategory,
    keyWords,
    setKeyWords
}){

    const {data: dataCategories, error: errorCategories} = useFetch(getCategories)

    return(
        <>
            <Filters
                categories = {dataCategories}
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
