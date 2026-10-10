import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Hero />
      <Services/>
      <About/>
    </BrowserRouter>
  );
}

export default App;