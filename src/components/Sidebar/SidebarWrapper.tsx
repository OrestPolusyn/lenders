import { useEffect, useState } from 'react'
import { Sidebar } from './Sidebar'

export default function SidebarWrapper() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Handle button with id="contactBtn" (legacy support)
    const contactBtn = document.getElementById('contactBtn')
    const handleContactClick = () => {
      setIsOpen(prev => !prev)
    }

    if (contactBtn) {
      contactBtn.addEventListener('click', handleContactClick)
    }

    // Handle all buttons with data-open-sidebar attribute
    const sidebarButtons = document.querySelectorAll('[data-open-sidebar]')
    const handleSidebarClick = () => {
      setIsOpen(prev => !prev)
    }

    sidebarButtons.forEach(button => {
      button.addEventListener('click', handleSidebarClick)
    })

    return () => {
      if (contactBtn) {
        contactBtn.removeEventListener('click', handleContactClick)
      }
      sidebarButtons.forEach(button => {
        button.removeEventListener('click', handleSidebarClick)
      })
    }
  }, [])

  // Block scroll when sidebar is open and update button states
  useEffect(() => {
    const contactBtn = document.getElementById('contactBtn')
    const sidebarButtons = document.querySelectorAll('[data-open-sidebar]')

    if (isOpen) {
      document.body.style.overflow = 'hidden'
      contactBtn?.classList.add('active')
      sidebarButtons.forEach(button => button.classList.add('active'))
    } else {
      document.body.style.overflow = ''
      contactBtn?.classList.remove('active')
      sidebarButtons.forEach(button => button.classList.remove('active'))
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const handleClose = () => {
    setIsOpen(false)
  }

  return <Sidebar open={isOpen} onSidebarClose={handleClose} />
}
