import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './Components/Navbar';
import Hero from './Components/Hero';
import Services from './Components/Services';
import About from './Components/About'
import Team from './Components/Team';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
function App() {
  return (
    <>
      <MyNavbar/>
      <Hero/>
      <About/>
      <Services/>
      <Team/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
