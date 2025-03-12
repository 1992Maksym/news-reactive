export const arrowClickHandler = (
  currentPage: number,
  setCurrentPage: Function,
  PAGINATION_PAGES: number
) => {
  const clickBtn = (index: number) => {
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
