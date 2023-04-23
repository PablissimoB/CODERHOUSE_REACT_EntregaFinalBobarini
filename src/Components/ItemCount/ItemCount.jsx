import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import "./ItemCount.css"

const ItemCount = ({ initial=0, onAdd }) => {
  const [contador, setContador] = useState(initial);

  useEffect(() => {
    setContador(initial)
  }, [initial])

  const sumar = () => {
      setContador(contador + 1);
  };

  const restar = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  return (
    <div className="container-btn">
    <h3>Cantidad Actual: {contador}</h3>
    <div className="btns">
      <Button variant="outlined" color="success" onClick={sumar}>
        +
      </Button>
      <Button variant="contained" color="success" onClick={() => 
        contador>0?onAdd(contador): 
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Debe agregar al menos 1 producto",
          showConfirmButton: false,
          timer: 1100,
        }) }>
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
