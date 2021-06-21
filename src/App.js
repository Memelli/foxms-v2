import './App.css';
import NewsHome from './components/Content/News';
import Footer from './components/Footer.js/Footer';
import Hero from './components/Header/Hero';
import Navbar from './components/Header/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <NewsHome />
      <Footer />
    </>
  );
}

export default App;
