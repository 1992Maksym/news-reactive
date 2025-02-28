export const arrowClickHandler = (
  currentPage,
  setCurrentPage,
  PAGINATION_PAGES
) => {
  const clickBtn = (index) => {
    setCurrentPage(index)
  }
  const clickRightArrow = () => {
    if (currentPage < PAGINATION_PAGES) setCurrentPage(currentPage + 1)
  }
  const clickLeftArrow = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1)
  }

  return { clickBtn, clickRightArrow, clickLeftArrow }
}
