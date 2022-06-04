import Navbar from "./components/Navbar";
import About from './components/About';
import AllInOne from './components/AllInOne';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Pricing from './components/Pricing';
import Support from './components/Support';

function App() {
  return (
    <div>
      <p className='text-4xl text-center'>Cloud Management</p>
      <Navbar/>
      <Hero/>
      <About/>
      <Support/>
      <AllInOne/>
      <Pricing/>
      <Footer/>
    </div>
  );
}

export default App;
