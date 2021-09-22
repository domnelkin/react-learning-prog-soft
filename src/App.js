import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Catalog from './components/pages/Catalog';
import Cart from './components/pages/Cart';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/catalog' component={Catalog} />
          <Route path='/cart' component={Cart} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
