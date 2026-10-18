import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import ContactHero from './components/ContactHero/ContactHero';
import ContactInfo from './components/ContactInfo/ContactInfo';
import ContactAppointment from './components/ContactAppointment/ContactAppointment';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <ContactHero />
      <ContactInfo />
      <ContactAppointment />
      <Footer />
    </BrowserRouter>
  );
}

export default App;