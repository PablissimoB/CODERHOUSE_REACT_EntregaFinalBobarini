import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./ItemListContainer.module.css";
import ItemList from "../ItemList/ItemList";
import BounceLoader from "react-spinners/BounceLoader";

import { db } from "../../firebaseConfig";

import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const { categoryName } = useParams();

  const [items, setItems] = useState([]);

  useEffect(() => {
    const itemsCollection = collection(db, "items");

    let consulta = undefined;

    if (categoryName) {
      const q = query(itemsCollection, where("category", "==", categoryName));
      consulta = getDocs(q);
    } else {
      consulta = getDocs(itemsCollection);
    }

    consulta.then((res) => {
      let items = res.docs.map((product) => {
        return {
          ...product.data(),
          id: product.id,
        };
      });

      setItems(items);
    });
  }, [categoryName]);

  if (items.length === 0) {
    return (
      <div className={styles.estilo}>
        <BounceLoader
          color={"#16820a"}
          size={50}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  }

  return (
    <div className={styles.estilo2}>

      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
