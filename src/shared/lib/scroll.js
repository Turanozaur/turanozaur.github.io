export function getScrollGapPx() {
  return 2.5 * parseFloat(getComputedStyle(document.documentElement).fontSize)
}

export function scrollToPageY(top) {
  window.scrollTo({ top, behavior: 'smooth' })
}
