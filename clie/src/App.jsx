import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import { logo } from './assets';
import { Home, CreatePost } from './page';
import Footer from './page/Footer';
import About from './page/About';
import Contact from './page/Contact';

const App = () => (
  <BrowserRouter>
    <header className="w-auto lg:h-32 flex justify-between items-center bg-[#f9fafe] sm:px-8  ">
      <Link to="/">
        <img src={logo} alt="logo" className="w-36  " />
      </Link>

      <Link to="/create-post" className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md">Create</Link>
    </header>



    
    <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/about-community" element={<About />} />
        <Route path="/business-enquiry" element={<Contact />} />
        
      </Routes>
    </main>
    <Footer/>
    
  </BrowserRouter>
);

export default App;
