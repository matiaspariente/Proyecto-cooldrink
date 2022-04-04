import express from "express";

const router = express.Router();

router.get('/',(req,res)=>{
    const productos = [{
        id: "Cerveza",
        img: "../img/productos/cervezaTemple.jpg",
        title: "Cerveza",
        price: 200
      },
      {
        id: "Aperitivo",
        img: "../img/productos/aperitivoBranca.jpg",
        title: "Aperitivo",
        price: 500
      },
      {
        id: "Vino",
        img: "../img/productos/vinoBenjamin.jpg",
        title: "Vino",
        price: 900
      },
      {
        id: "Whisky",
        img: "../img/productos/whiskyChivas.jpg",
        title: "Whisky",
        price: 1500
      }
    ]                
    res.send(productos); //lo informo
})

export default router;