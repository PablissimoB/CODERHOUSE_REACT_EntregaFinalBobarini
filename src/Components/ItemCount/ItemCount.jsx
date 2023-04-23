import { Button } from "@mui/material";
import { useEffect, useState, useContext } from "react";
import Swal from "sweetalert2";
import "./ItemCount.css"
import { CartContext } from "../../Context/CartContext";

const ItemCount = ({ initial, onAdd, id }) => {
  const [contador, setContador] = useState(initial);

  const { deleteProductById } =
  useContext(CartContext);

  useEffect(() => {
    if(contador ==undefined){
      initial =0;
      setContador(initial)
    }

    setContador(initial)
  }, [initial])

  const sumar = () => {
      contador ==undefined?setContador(1):setContador(contador + 1);
  };

  const restar = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  return (
    <div className="container-btn">
    <h3>Cantidad Actual: {contador==undefined? 0:contador}</h3>
    <div className="btns">
      <Button variant="outlined" color="success" onClick={sumar}>
        +
      </Button>
      <Button variant="contained" color="success" onClick={() => 
        contador>0? onAdd(contador): (initial>0?  deleteProductById(id) : 
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Debe agregar al menos 1 producto",
          showConfirmButton: false,
          timer: 1100,
        })
        ) }>
        Modificar
      </Button>
      <Button variant="outlined" color="success" onClick={restar}>
        -
      </Button>
    </div>
  </div>
  );
};

export default ItemCount;
