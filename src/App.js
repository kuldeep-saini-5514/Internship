import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeedbackSection from './components/FeedBackSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <FeedbackSection/>
      <ContactSection/>
      <Footer/>
    </div>
  );
}

export default App;
