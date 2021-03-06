import ProductList from "./pages/ProductList";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Products from "./component/Products";
import {
  BrowserRouter,
  Routes,
  Route,
  Redirect,
  Navigate
} from "react-router-dom";
import { useSelector } from "react-redux";
import Success from "./pages/Success";


const App = () => {
  const user = useSelector(state => state.user.currentUser);
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/success" element={<Success />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route path="/register" element={user ? <Navigate to="/" /> : <Register />} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;
