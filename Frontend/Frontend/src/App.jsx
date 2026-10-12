import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import Prices from './components/Prices/Prices';
import Testimonials from './components/Testimonials/Testimonials';
import Benefits from './components/Benefits/Benefits';
import Discount from './components/Discount/Discount';
import Blog from './components/Blog/Blog';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Hero />
      <Services/>
      <About/>
      <Prices/>
      <Testimonials/>
      <Benefits/>
      <Discount/>
      <Blog/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;