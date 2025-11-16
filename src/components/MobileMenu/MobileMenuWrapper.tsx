import { useEffect, useState } from 'react'
import MobileMenu from './MobileMenu'

export default function MobileMenuWrapper() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn')

    const handleClick = () => {
      setIsOpen(prev => {
        const newState = !prev
        mobileMenuBtn?.classList.toggle('active', newState)
        return newState
      })
    }

    if (mobileMenuBtn) {
      mobileMenuBtn.addEventListener('click', handleClick)
    }

    return () => {
      if (mobileMenuBtn) {
        mobileMenuBtn.removeEventListener('click', handleClick)
      }
    }
  }, [])

  const handleClose = () => {
    setIsOpen(false)
    const mobileMenuBtn = document.getElementById('mobileMenuBtn')
    mobileMenuBtn?.classList.remove('active')
  }

  return <MobileMenu isOpen={isOpen} onClose={handleClose} />
}
