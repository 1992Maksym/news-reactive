import Filters from "../Filters/Filters"
import Search from "../Search/Search"

export default function NewsFilters({
    setCurrentCategory,
    currentCategory,
    keyWords,
    setKeyWords,
    categories
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
