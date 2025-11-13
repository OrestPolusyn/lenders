import { useEffect, useState } from 'react'
import MobileMenu from './MobileMenu'

export default function MobileMenuWrapper() {
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

  const handleClose = () => {
    setIsOpen(false)
    const sidebarBtn = document.getElementById('sidebarBtn')
    sidebarBtn?.classList.remove('active')
  }

  return <MobileMenu isOpen={isOpen} onClose={handleClose} />
}
