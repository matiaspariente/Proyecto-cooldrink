import express from 'express';
import apiProductosRouter from './routes/apiProductos.js';
import __dirname from './utils.js';

const app= express();
const PORT = process.env.PORT||8080;
app.listen(PORT,()=>console.log(`listening on ${PORT}`))

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use('/',express.static(__dirname+'/public'))

app.use('/api/productos/',apiProductosRouter)

