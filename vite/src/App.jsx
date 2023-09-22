import { useState, useEffect } from 'react'
import {Route, Routes} from 'react-router-dom'
import Layout from './component/Layout/Layout'
import Main from './component/Pages/Main/Main'
import About from './component/Pages/About/About'
import OurService from './component/Pages/OurService/OurService'
import Work from './component/Pages/Work/Work'
import Contact from './component/Pages/Contact/Contact'
import Faq from './component/Pages/Faq/Faq'
import Terms from './component/Pages/Terms/Terms'
import Careers from './component/Pages/Careers/Careers'
import Blog from './component/Pages/Blog/Blog'
import Partners from './component/Pages/Partners/Partners'
import News from './component/Pages/News/News'
import '../MainCss.css'

function App() {

  return (
    <>

<Layout>
<Routes>
  <Route path='/' element={<Main/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/services' element={<OurService/>}/>
  <Route path='/work' element={<Work/>}/>
  <Route path='/contact' element={<Contact/>}/>

  <Route path='/faq' element={<Faq/>}/>
  <Route path='/terms' element={<Terms/>}/>
  <Route path='/careers' element={<Careers/>}/>
  <Route path='/blog' element={<Blog/>}/>
  <Route path='/partners' element={<Partners/>}/>
  <Route path='/news' element={<News/>}/>
</Routes>
</Layout>
    
    </>
  )
}

export default App