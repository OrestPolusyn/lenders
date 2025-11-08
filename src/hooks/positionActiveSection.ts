export const positionActiveSection = () => {
  const scrollPosition = window.scrollY
  let sectionHeight = window.innerHeight

  if (sectionHeight < 730) {
    sectionHeight = 730
  }

  const activeSectionNumber = Math.floor(
    (scrollPosition + sectionHeight / 2) / sectionHeight
  )

  return activeSectionNumber + 1
}
