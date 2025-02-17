const formatTimeAgo = (publishedDate) => {
    const newTime = (new Date()).getTime()
    const publishedTime = (new Date(publishedDate)).getTime()
    const differentsTime = (newTime - publishedTime)/1000

    if(differentsTime < 60) {
        return `${Math.floor(differentsTime)} seconds ago`
    }
    if(differentsTime < 3600) {
        return `${Math.floor(differentsTime)} minutes ago`
    }
    if(differentsTime < 86400) {
        return `${Math.floor(differentsTime)} hours ago`
    }
    if(differentsTime > 86400) {
        return `${Math.floor(differentsTime)} days ago`
    }
}

export default formatTimeAgo