import { About } from './_components/About'
import { Hero } from './_components/Hero'
import { Calculator } from './_components/Calculator'
import { Philosophy } from './_components/Philosophy'

export const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Calculator />
      <Philosophy />
      {/*   <Product />
      <Choose />
      <Contact />
      <SideBarIndicator /> */}
    </>
  )
}
