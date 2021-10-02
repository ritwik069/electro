
import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Newsletter from './Components/NewsLetter';
import { CartProvider } from './Context/CartContext';
import Slider from './Components/Slider'
import Cart from './pages/Cart';
import Product from './pages/Product';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Announcement from './Components/Announcement';


function App() {
  return (
    <Router>

      <CartProvider>

        <div className="App">

          <Announcement />
          <Navbar />  
          {/* <Slider/> */}
          <Switch>
            <Route exact path='/electro/cart'>

              <Cart />
            </Route>
            <Route exact path='/electro/p'>
              <Product />
            </Route>
            <Route exact path='/electro/'>
            <Slider/>
            </Route>
          </Switch>
          <Newsletter />
          <Footer />

        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
