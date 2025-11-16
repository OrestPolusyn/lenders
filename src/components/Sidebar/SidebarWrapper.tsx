import { useEffect, useState } from 'react'
import { Sidebar } from './Sidebar'

export default function SidebarWrapper() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const contactBtn = document.getElementById('contactBtn')

    if (!contactBtn) return

    const handleClick = () => {
      setIsOpen(prev => !prev)
    }

    contactBtn.addEventListener('click', handleClick)

    return () => {
      contactBtn.removeEventListener('click', handleClick)
    }
  }, [])

  // Block scroll when sidebar is open
  useEffect(() => {
    const contactBtn = document.getElementById('contactBtn')

    if (isOpen) {
      contactBtn?.classList.add('active')
    } else {
      contactBtn?.classList.remove('active')
    }
  }, [isOpen])

  const handleClose = () => {
    setIsOpen(false)
  }

  return <Sidebar open={isOpen} onSidebarClose={handleClose} />
}
