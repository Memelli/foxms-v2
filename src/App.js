import './App.css';
import Footer from './components/Footer.js/Footer';
import Navbar from './components/Header/Navbar';
import {Switch, Route} from 'react-router-dom'
import Home from './pages/Home';
import Cadastro from './pages/Cadastro';
import Downloads from './pages/Downloads';
import Ranking from './pages/Ranking';
import Suporte from './pages/Suporte';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/signup' exact component={Cadastro} />
        <Route path='/download' exact component={Downloads} />
        <Route path='/rankings' exact component={Ranking} />
        <Route path='/suporte' exact component={Suporte} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
