import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Cart from "./Components/Cart/Cart";
import Form from "./Components/Form/Form";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Navbar from "./Components/Navbar/Navbar";
import CartContextProvider from "./Context/CartContext";
import Footer from './Components/Footer/Footer';
import NotFound from './Components/NotFound/NotFound';

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Navbar />

        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route
            path="/category/:categoryName"
            element={<ItemListContainer />}
          />

          <Route path="/cart" element={<Cart />} />
          <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
          <Route path="/formulario" element={<Form />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer/>
      </CartContextProvider>
      
    </BrowserRouter>
  );
}

export default App;
