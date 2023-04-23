import { Button } from "@mui/material";
import React, { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import "./Cart.css";
import Swal from "sweetalert2";
import FormCheckout from "../FormCheckout/FormCheckout";
import { Link } from "react-router-dom";
const Cart = () => {
  const { cart, clearCart, getTotalPrice, deleteProductById } =
    useContext(CartContext);

  const [showForm, setShowForm] = useState(false);
  const [orderId, setOrderId] = useState(null)

  const clear = () => {
    Swal.fire({
      title: "¿Vaciar el carrito?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Si",
      confirmButtonColor: "#006F1E",
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("Carrito vaciado exitosamente", "", "success");
      } else if (result.isDenied) {
        Swal.fire("No se han producido cambios", "", "info");
      }
    });
  };

  if(orderId){
    return (
      <div className="success">
        <h2>Gracias por su compra</h2>
        <h4>La orden es : {orderId}</h4>
        <Link to="/"> <Button color="success" variant="contained" >Inicio</Button> </Link>
      </div>
    )
  }
  
  if(getTotalPrice()==0){
    return (
    <div className="no-products">
      <h1>No hay productos en el carrito</h1>
    </div>
    )
  }
  else{
    return (
      <div>
        {!showForm ? (
          <div className="cart-container">
            <div className="container-items">
              {cart.map((item) => {
                return (
                  <div key={item.id} className="cart-item">
                    <img src={item.img} alt="" />
                    <div className="cart-item-info">
                      <h2>{item.title}</h2>
                      <h4>${item.price}</h4>
                      <h4>Unidades: {item.quantity}</h4>
                      <Button
                        color="warning"
                        variant="contained"
                        onClick={() => deleteProductById(item.id)}
                      >
                        Eliminar
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="cart-info">
              <h1>Importe Total: ${getTotalPrice()}</h1>
              {cart.length > 0 && (
                <div className="btn-cart">
                  
                  <Button variant="contained" color="success" onClick={()=>setShowForm(true)}>
                    Continuar
                    </Button>
                  <Button onClick={clear} color="error" variant="contained">
                    Vaciar
                  </Button>
                </div>
              )}

            </div>
          </div>
        ) : (
          
          <FormCheckout cart={cart} getTotalPrice={getTotalPrice} setOrderId={setOrderId} clearCart={clearCart} />
        )}
      </div>
    );
  }
  
};

export default Cart;
