import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Catalog from './components/pages/Catalog';
import Cart from './components/pages/Cart';
import Footer from './components/Footer';
import ProductPage from './components/pages/ProductPage';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' exact component={Home} />
          <Route exact path='/catalog' component={Catalog} />
          <Route exact path='/cart' component={Cart} />
          <Route exact path='/cart' component={ProductPage} />
          <Route path="/catalog/:id" component={ProductPage} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
