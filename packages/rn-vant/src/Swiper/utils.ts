interface Params {
  pagesCount: number;
  offset: number;
  loop: boolean;
  pageSize: number;
}

export const calcPageIndex = (params: Params): number => {
  const { pagesCount, offset, loop, pageSize } = params;
  const pageIndexIncludingClonedPages = Math.round(offset / pageSize);

  let actualPageIndex;
  if (loop) {
    actualPageIndex = (pageIndexIncludingClonedPages + (pagesCount - 1)) % pagesCount;
  } else {
    actualPageIndex = Math.min(pagesCount - 1, pageIndexIncludingClonedPages);
  }

  return actualPageIndex;
};
