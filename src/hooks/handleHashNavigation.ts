export const handleHashNavigation = () => {
  const hash = window.location.hash
  if (hash) {
    // Small delay to ensure DOM is fully loaded
    setTimeout(() => {
      const element = document.querySelector(hash)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }
}
