import { useEffect } from 'react'
import { useTheme } from '../theme/ThemeContext.jsx'

const BOTTOM_TOLERANCE_PX = 8

function readCssVar(name) {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim()
}

function isAtTop(scrollY) {
  return scrollY <= 1
}

function isAtBottom(scrollY, viewportHeight, docHeight) {
  return scrollY + viewportHeight >= docHeight - BOTTOM_TOLERANCE_PX
}

export function syncOverscrollBackground() {
  const root = document.documentElement
  const scrollY = window.scrollY
  const viewportHeight = window.innerHeight
  const docHeight = root.scrollHeight

  if (isAtTop(scrollY)) {
    root.style.backgroundColor = readCssVar('--color-bg')
  } else if (isAtBottom(scrollY, viewportHeight, docHeight)) {
    root.style.backgroundColor = readCssVar('--color-footer-bg')
  } else {
    root.style.removeProperty('background-color')
  }
}

function handleWheel(event) {
  const scrollY = window.scrollY
  const viewportHeight = window.innerHeight
  const docHeight = document.documentElement.scrollHeight
  const pullingPastTop = isAtTop(scrollY) && event.deltaY < 0
  const pullingPastBottom = isAtBottom(scrollY, viewportHeight, docHeight) && event.deltaY > 0

  if (pullingPastTop || pullingPastBottom) {
    syncOverscrollBackground()
  }
}

function handleTouchMove() {
  const scrollY = window.scrollY
  const viewportHeight = window.innerHeight
  const docHeight = document.documentElement.scrollHeight

  if (isAtTop(scrollY) || isAtBottom(scrollY, viewportHeight, docHeight)) {
    syncOverscrollBackground()
  }
}

export function useOverscrollBackground() {
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    syncOverscrollBackground()

    window.addEventListener('scroll', syncOverscrollBackground, { passive: true })
    window.addEventListener('resize', syncOverscrollBackground, { passive: true })
    window.addEventListener('wheel', handleWheel, { passive: true })
    window.addEventListener('touchmove', handleTouchMove, { passive: true })

    return () => {
      window.removeEventListener('scroll', syncOverscrollBackground)
      window.removeEventListener('resize', syncOverscrollBackground)
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('touchmove', handleTouchMove)
      document.documentElement.style.removeProperty('background-color')
    }
  }, [])

  useEffect(() => {
    syncOverscrollBackground()
  }, [resolvedTheme])
}
