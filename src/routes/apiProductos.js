import express from "express";

const router = express.Router();

router.get('/',(req,res)=>{ // se devuelve el listado completo de productos cuando se recibe el get correspondiente a este router
    const productos = [{
        id: "aperitivoBranca",
        img: "../img/productos/aperitivoBranca.jpg",
        title: "Fernet Branca",
        price: 1100
      },
      {
        id: "aperitivoCampari",
        img: "../img/productos/aperitivoCampari.jpg",
        title: "Campari",
        price: 690
      },
      {
        id: "aperitivoMalibu",
        img: "../img/productos/aperitivoMalibu.jpg",
        title: "Malibu",
        price: 1700
      },
      {
        id: "aperitivoVelhoBarreiro",
        img: "../img/productos/aperitivoVelhoBarreiro.jpg",
        title: "Velho Barreiro",
        price: 880
      },
      {
        id: "cervezaBarbarojaHoney",
        img: "../img/productos/cervezaBarbarojaHoney.jpg",
        title: "Barba Roja Honey",
        price: 250      },
      {
        id: "cervezaBarbarojaIpa",
        img: "../img/productos/cervezaBarbarojaIpa.jpg",
        title: "Barba Roja Honey",
        price: 250
      },
      {
        id: "cervezaBrahma",
        img: "../img/productos/cervezaBrahma.jpg",
        title: "Brahma",
        price: 130
      },
      {
        id: "cervezaHeineken",
        img: "../img/productos/cervezaHeineken.jpg",
        title: "Heineken",
        price: 200
      },
      {
        id: "cervezaPenionBetaIpa",
        img: "../img/productos/cervezaPenionBetaIpa.jpg",
        title: "Peñon del Aguila Beta Ipa",
        price: 200
      },
      {
        id: "cervezaPenionMexicanLager",
        img: "../img/productos/cervezaPenionMexicanLager.jpg",
        title: "Peñon del Aguila Mexican Lager",
        price: 200
      },
      {
        id: "cervezaPenionOktoberfest",
        img: "../img/productos/cervezaPenionOktoberfest.jpg",
        title: "Peñon del Aguila Oktoberfest",
        price: 200
      },
      {
        id: "cervezaSchneider",
        img: "../img/productos/cervezaSchneider.jpg",
        title: "Schneider",
        price: 130
      },
      {
        id: "cervezaStellaArtois",
        img: "../img/productos/cervezaStellaArtois.jpg",
        title: "Stella Artois",
        price: 170
      },
      {
        id: "cervezaTempleWolfIpa",
        img: "../img/productos/cervezaTempleWolfIpa.jpg",
        title: "Temple Wolf Ipa",
        price: 250
      },
      {
        id: "champagneChandonExtraBrut",
        img: "../img/productos/champagneChandonExtraBrut.jpg",
        title: "Chandon Extra Brut",
        price: 1200
      },
      {
        id: "champagneLalindaExtraBrut",
        img: "../img/productos/champagneLalindaExtraBrut.jpg",
        title: "La Linda Extra Brut",
        price: 940
      },
      {
        id: "champagneNavarroExtraBrut",
        img: "../img/productos/champagneNavarroExtraBrut.jpg",
        title: "Navarro Correas Extra Brut",
        price: 850
      },
      {
        id: "ginBeefeater",
        img: "../img/productos/ginBeefeater.jpg",
        title: "Beefeater",
        price: 3100
      },
      {
        id: "ginBombay",
        img: "../img/productos/ginBombay.jpg",
        title: "Bombay",
        price: 3600
      },
      {
        id: "vinoCorderoConPielDeLoboMalbec",
        img: "../img/productos/vinoCorderoConPielDeLoboMalbec.jpg",
        title: "Cordero con piel de lobo Malbec",
        price: 460
      },
      {
        id: "vinoDonDavidMalbec",
        img: "../img/productos/vinoDonDavidMalbec.jpg",
        title: "Don David Malbec",
        price: 620
      },
      {
        id: "vinoLasPerdicesMalbec",
        img: "../img/productos/vinoLasPerdicesMalbec.jpg",
        title: "Las Perdices Malbec",
        price: 690
      },
      {
        id: "vinoLuigiBoscaMalbec",
        img: "../img/productos/vinoLuigiBoscaMalbec.jpg",
        title: "Luigi Bosca Malbec",
        price: 1400
      },
      {
        id: "vinoPerroCallejeroMalbec",
        img: "../img/productos/vinoPerroCallejeroMalbec.jpg",
        title: "Perro Callejero Malbec",
        price: 690
      },
      {
        id: "vinoRutiniCabernetMalbec",
        img: "../img/productos/vinoRutiniCabernetMalbec.jpg",
        title: "Rutini Cabernet Malbec",
        price: 1600
      },
      {
        id: "vinoTrumpeterMalbec",
        img: "../img/productos/vinoTrumpeterMalbec.jpg",
        title: "Trumpeter Malbec",
        price: 990
      },
      {
        id: "vodkaAbsolutRaspberry",
        img: "../img/productos/vodkaAbsolutRaspberry.jpg",
        title: "Absolut Raspberry",
        price: 2900
      },
      {
        id: "vodkaSmirnoff",
        img: "../img/productos/vodkaSmirnoff.jpg",
        title: "Smirnoff",
        price: 800
      },
      {
        id: "whiskyChivas",
        img: "../img/productos/whiskyChivas.jpg",
        title: "Chivas",
        price: 4000
      },
      {
        id: "whiskyJackDaniels",
        img: "../img/productos/whiskyJackDaniels.jpg",
        title: "Jack Daniels",
        price: 5700
      },
      {
        id: "whiskyJameson",
        img: "../img/productos/whiskyJameson.jpg",
        title: "Jameson",
        price: 2800
      },
      {
        id: "whiskyJohnieWalkerRed",
        img: "../img/productos/whiskyJohnieWalkerRed.jpg",
        title: "Johnie Walker Red",
        price: 3100
      }
    ]                
    res.send(productos); //lo informo
})

export default router;