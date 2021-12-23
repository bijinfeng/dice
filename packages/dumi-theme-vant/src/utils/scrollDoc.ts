const win = typeof window !== 'undefined' ? window : {};
const doc = typeof document !== 'undefined' ? document : { documentElement: {} };
// IE < 9 & Node
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
let scrollElem = typeof win.pageYOffset === 'undefined' ? doc.documentElement : null;

function detectScrollElem() {
  const startScrollTop = window.pageYOffset;
  document.documentElement.scrollTop = startScrollTop + 1;
  if (window.pageYOffset > startScrollTop) {
    document.documentElement.scrollTop = startScrollTop;
    // IE > 9 & FF (standard)
    return document.documentElement;
  }
  // Chrome (non-standard)
  return document.scrollingElement || document.body;
}

export function scrollDoc() {
  // eslint-disable-next-line no-return-assign
  return (scrollElem || (scrollElem = detectScrollElem())) as HTMLElement;
}
