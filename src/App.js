import { Route, Switch } from 'react-router';
import CategoryProducts from './components/CategoryProducts';
import CartPage from './pages/CartPage';
import HomePage from './pages/HomePage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import './style.scss';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/product/:productId">
          <ProductDetailsPage />
        </Route>
        <Route path="/category/:categoryName">
          <CategoryProducts />
        </Route>
        <Route path="/cart">
          <CartPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
