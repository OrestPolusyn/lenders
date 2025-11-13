import { useState, useEffect } from 'react'
import { HeaderSidebar } from './HeaderSidebar'

export default function HeaderSidebarWrapper() {
  const [isOpen, setIsOpen] = useState(false)

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

  // Block scroll when sidebar is open
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

  return <HeaderSidebar open={isOpen} onSidebarClose={handleClose} />
}
