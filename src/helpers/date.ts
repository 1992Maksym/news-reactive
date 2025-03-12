
const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
        year: "numeric", 
        month: "long", 
        day: "numeric",
        weekday: "long"
    }
    
    return date.toLocaleDateString('en-US',options)
}
export default formatDate