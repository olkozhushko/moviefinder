import range from "./range";

function getPagesLayout({
    currentPage = 1, 
    pageNeighboursNumber = 1, 
    totalPages=0}) {
  
  const totalNumbers = (pageNeighboursNumber * 2) + 3;
  const totalBlocks = totalNumbers + 2;

  if(totalBlocks < totalPages) {

    const leftBound = currentPage - pageNeighboursNumber;
    const rightBound = currentPage + pageNeighboursNumber;
    const beforeLastPage = totalPages - 1;

    const startPage = Math.max(2, leftBound);
    const endPage = rightBound < beforeLastPage ? rightBound : beforeLastPage;
 
    let pages = range(startPage, endPage);
    const paginOffset = totalNumbers - pages.length - 1;

    const hasSpillLeft = startPage > 2;
    const hasSpillRight = endPage < beforeLastPage;

    if(hasSpillLeft && !hasSpillRight) {
        const extraPages = range(startPage - paginOffset, startPage - 1);
        pages = ["Left", ...extraPages, ...pages];
    }
    if(!hasSpillLeft && hasSpillRight) {
        const extraPages = range(endPage + 1, endPage + paginOffset);
        pages = [...pages, ...extraPages, "Right"];
    } 
    if(hasSpillLeft && hasSpillRight) {
        pages = ["Left", ...pages, "Right"];
    }

    return [1, ...pages, totalPages];
  }
  return [...range(1, totalPages)];
}

export default getPagesLayout;