import { About } from './_components/About'
import { Hero } from './_components/Hero'
import { Calculator } from './_components/Calculator'
import { Philosophy } from './_components/Philosophy'
import {Reviews } from './_components/Reviews'

export const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Calculator />
      <Philosophy />
       <Reviews />
      {/*   <Product />
      <Choose />
      <Contact />
      <SideBarIndicator /> */}
    </>
  )
}
