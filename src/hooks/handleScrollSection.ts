import { positionActiveSection } from './positionActiveSection'

export const handleScrollSection = (
  setActiveSection: React.Dispatch<React.SetStateAction<number>>
) => {
  const handleScroll = () => {
    setActiveSection(positionActiveSection())
  }

  window.addEventListener('scroll', handleScroll)

  handleScroll()

  return () => {
    window.removeEventListener('scroll', handleScroll)
  }
}
