import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const Item = ({ element }) => {
  return (
    <Card
      sx={{
        width: 200,
        height: 200,
        backgroundColor: "green",
        color: "white",
        border: "1px solid black",
        borderRadius: "10px",
        boxShadow: "0px 0px 10px greenyellow",
      }}
    >
      <CardMedia
        sx={{ height: 100, backgroundColor: "whitesmoke" }}
        image={element.img}
        title="black"
      />
      <CardContent sx={{ height: 60 }}>
        <Typography gutterBottom component="div" align="center">
          {element.title}
        </Typography>
        <Typography variant="body">${element.price}.-</Typography>
      </CardContent>
      <CardActions>
        <Link to={`/itemDetail/${element.id}`}>
          <Button size="small" variant="contained" color="success">
            Detalle
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default Item;