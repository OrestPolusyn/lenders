import { Route, Routes } from 'react-router-dom'
import { Header } from '../components/Header'
// import { CookiePolicy } from '../pages/CookiePolicy'
import { Home } from '../pages/Home'
import { Footer } from '../components/Footer'
// import { PrivacyPolicy } from '../pages/PrivacyPolicy'
//
export const AppRoutes = () => {
  return (
    <div className='site-container'>
      <Header />
      <main className='main'>
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/privacy-policy' element={<PrivacyPolicy />} /> */}
          {/* <Route path='/cookie-policy' element={<CookiePolicy />} /> */}
          <Route path='*' element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
