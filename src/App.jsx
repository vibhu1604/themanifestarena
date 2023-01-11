import './App.css';
import About from './components/about/About';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Qualification from './components/qualification/Qualification';
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';
import Scrollup from './components/scrollup/Scrollup';
// import Work from './components/work/Work';

function App() {
  return (
    <>
      <Header />
      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        {/* <Work /> */}
        <Contact />

      </main>
      <Footer />
      <Scrollup />
    </>
  );
}

export default App;
