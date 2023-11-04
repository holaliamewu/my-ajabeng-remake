import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './Home';
import Shop from './Shop';
import Contact from './Contact';
import SizeGuide from './SizeGuide';
import Collections from './Collections';
import PrideOfGhana from './PrideOfGhana';
import About from './About';
import Layout from './Layout';

export default function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route element={<Layout />} >
          <Route path='/' element={ <Home />} />
          <Route path='/shop' element={ <Shop />} />
          <Route path='/collections' element={ <Collections />} />
          <Route path='/about' element={ <About />} />
          <Route path='/sizeguide' element={ <SizeGuide />} />
          <Route path='/prideofghana' element={ <PrideOfGhana />} />
          <Route path='/contact' element={ <Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}