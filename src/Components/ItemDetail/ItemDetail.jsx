import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";
const ItemDetail = ({ productSelected, onAdd, quantity }) => {
  return (
    <div className={"containerItemDetail"}>
      <div className={"containerImage"}>
        <img src={productSelected.img} alt="" />
      </div>

      <div className={"containerDetail"}>
        <h2  style={{ fontSize: "23px" }}>
          <span>Plato:</span>{" "}
          {productSelected.title}
        </h2>
        <h2  style={{ fontSize: "20px" }}>
          <span>Precio:</span> $
          {productSelected.price}
        </h2>

        <ItemCount
          onAdd={onAdd}
          initial={quantity}
        />
      </div>
    </div>
  );
};

export default ItemDetail;
