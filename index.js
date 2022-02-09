/*
*    Miguel Torres Cárdenas
*    Demo for API Testing
*/

const express=require("express");
const userRoutes=require("./routes/users_routes");
const cors=require('cors');

const app=express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/users",userRoutes);

try{
    app.listen(80,()=>console.log("Escuchando en puerto 8081"));
}
catch{
    err=>console.log(err)
}