import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeedbackSection from './components/FeedBackSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { Card } from './components/Card';
import CenterMode from './components/Bottomslider';
import Carosel from './components/Carosel.component';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Card/>
      <Carosel/>
      <FeedbackSection/>
      <ContactSection/>
      <Footer/>
    </div>
  );
}

export default App;
