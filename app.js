/*
*    Miguel Torres Cárdenas
*    Demo for API Testing
*/

const express=require("express");
const userRoutes=require("./routes/users_routes");
const cors=require('cors');
const port = 3000

const app=express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/users",userRoutes);

try{
    app.listen(port,()=>console.log(`Escuchando en puerto ${port}`));
}
catch{
    err=>console.log(err)
}