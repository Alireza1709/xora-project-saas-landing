import React, { Component } from 'react';
import Header from './Header';
import Hero from './Hero';
import Features from './Features';
import Pricing from './Pricing';
import Faq from './Faq';
import Testimonials from './Testimonials';
import Download from './Download';
import Footer from './Footer';
 
const App = () => {

    return ( 
        <>
           <main className='overflow-hidden'>
                <Header/>
                <Hero/>
                <Features/>
                <Pricing/>
                <Faq/>
                <Testimonials/>
                <Download/>
                <Footer/>
           </main>
        </>
     );
}
 
export default App;