import Filters from "../Filters/Filters"
import Search from "../Search/Search"

export default function NewsFilters({
    categories,
    setCurrentCategory,
    currentCategory,
    keyWords,
    setKeyWords
}){
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
