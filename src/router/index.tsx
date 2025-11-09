import { Route, Routes } from 'react-router-dom'
import { Header } from '../components/Header'
// import { CookiePolicy } from '../pages/CookiePolicy'
import { HeaderSidebar } from '@/components/HeaderSidebar'
import { useState } from 'react'
import { Footer } from '../components/Footer'
import { Home } from '../pages/Home'
// import { PrivacyPolicy } from '../pages/PrivacyPolicy'
//
export const AppRoutes = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className='site-container'>
      <Header onSidebarOpen={() => setIsSidebarOpen(true)} />
      <main className='main'>
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/privacy-policy' element={<PrivacyPolicy />} /> */}
          {/* <Route path='/cookie-policy' element={<CookiePolicy />} /> */}
          <Route path='*' element={<Home />} />
        </Routes>
      </main>
      <Footer />

      <HeaderSidebar
        open={isSidebarOpen}
        onSidebarClose={() => setIsSidebarOpen(false)}
      />
    </div>
  )
}
