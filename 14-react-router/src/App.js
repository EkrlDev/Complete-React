import {Route, Switch, Redirect} from 'react-router-dom';
import Welcome from './pages/Welcome';
import Products from './pages/Products';
import Mainheader from './components/Mainheader';
import ProductDetail from './pages/ProductDetail';


function App() {
  return (
    <div>
      <Mainheader />
      <main>
        <Switch>
      <Route path="/" exact>
        <Redirect to="/welcome" />
      </Route>
      <Route path="/welcome">
        <Welcome />
      </Route>
      <Route path="/products" exact>
        <Products />
      </Route>
      <Route path="/products/:productId">
        <ProductDetail />
      </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;

