import React, { useState } from "react";
import "./FormCheckout.module.css";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { Button } from "@mui/material";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Swal from "sweetalert2";
import Cart from "../Cart/Cart";

const FormCheckout = ({ cart, getTotalPrice, setOrderId, clearCart }) => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleSubmit = (e) => {

      e.preventDefault();
      let total = getTotalPrice();
      let order = {
        buyer: userData,
        items: cart,
        total,
      };
      let orderCollection = collection(db, "orders");
      addDoc(orderCollection, order)
        .then((res) => {
          setOrderId(res.id);
          clearCart();
        })
        .catch((err) => console.log(err));
    }

  return (
    <div>
    <Box sx={{height: '4vh', display:'flex', 
    justifyContent: 'center', alignItems:'center', gap: '20px'}}>
      <h2>Importe Total: ${getTotalPrice()}</h2>
    </Box>
    <Box sx={{height: '26vh', display:'flex', 
    justifyContent: 'center', alignItems:'center', gap: '20px', backgroundColor:'green'}}>
      {cart.map((item) => {
                return (
                  <div key={item.id} className="cart-item">
                    <div className="cart-item-info">
                      <h5>{item.title}</h5>
                      <h5>${item.price}</h5>
                      <h5>Unidades: {item.quantity}</h5>
                    </div>
                  </div>
                );
              })}
    </Box>
    <Box sx={{ width: '95%', height: '50vh', display:'flex', 
    justifyContent: 'center', alignItems:'center', gap: '20px'}}>
        
      <form onSubmit={handleSubmit}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <TextField fullWidth 
              type="text"
              label="Nombre"
              value={userData.name}
              onChange={(e) => setUserData({ ...userData, name: e.target.value })}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth 
              type="text"
              label="Email"
              value={userData.email}
              onChange={(e) => setUserData({ ...userData, email: e.target.value })}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField 
              type="text"
              label="Telefono"
              value={userData.phone}
              onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
            />
          </Grid>
          <Grid item xs={6}>
          <TextField fullWidth 
            type="text"
            label="Direccion"
            value={userData.address}
            onChange={(e) => setUserData({ ...userData, address: e.target.value })}
          />
        </Grid>
          <Grid item xs={6}>
          <Button color="success" disabled={userData.address=="" || userData.email=="" ||userData.name=="" || userData.phone==""} variant="contained" type="submit">Comprar</Button>
          </Grid>
        </Grid>
      </form>
    </Box>
    </div>
  );
};

export default FormCheckout;
