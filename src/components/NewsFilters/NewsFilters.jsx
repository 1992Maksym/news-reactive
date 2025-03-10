import Filters from "../Filters/Filters"
import Search from "../Search/Search"
import Slider from "../Slider/Slider"

export default function NewsFilters({
    setCurrentCategory,
    currentCategory,
    keyWords,
    setKeyWords,
    categories
}){

    return(
        <>
            <Slider>
                <Filters
                    categories = {categories}
                    setCurrentCategory={setCurrentCategory}
                    currentCategory={currentCategory}
                />
            </Slider>
            <Search 
                keyWords = {keyWords}
                setKeyWords = {setKeyWords}
            />
        </>
    )
}
