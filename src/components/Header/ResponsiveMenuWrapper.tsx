import { useState, useEffect } from 'react'
import { HeaderSidebar } from '../HeaderSidebar/HeaderSidebar'
import MobileMenu from '../MobileMenu/MobileMenu'

export default function ResponsiveMenuWrapper() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Detect screen size (1180px breakpoint)
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1180)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    return () => {
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  // Handle sidebar button click
  useEffect(() => {
    const sidebarBtn = document.getElementById('sidebarBtn')
    
    const handleClick = () => {
      setIsOpen(prev => {
        const newState = !prev
        sidebarBtn?.classList.toggle('active', newState)
        return newState
      })
    }

    if (sidebarBtn) {
      sidebarBtn.addEventListener('click', handleClick)
    }

    return () => {
      if (sidebarBtn) {
        sidebarBtn.removeEventListener('click', handleClick)
      }
    }
  }, [])

  // Block scroll when menu/sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const handleClose = () => {
    setIsOpen(false)
    const sidebarBtn = document.getElementById('sidebarBtn')
    sidebarBtn?.classList.remove('active')
  }

  // Render mobile menu or desktop sidebar based on screen size
  return isMobile ? (
    <MobileMenu isOpen={isOpen} onClose={handleClose} />
  ) : (
    <HeaderSidebar open={isOpen} onSidebarClose={handleClose} />
  )
}
