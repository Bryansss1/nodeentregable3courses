const db=require("./utils/db")
const express=require("express")
const initmodel=require("../src/models/init.model")
const UsersRoutes=require("../src/routes/users.routes")
const CoursesRoutes=require("../src/routes/courses.routes")
const CategoriesRoutes=require("../src/routes/categories.routes")
const VideosRoutes=require("../src/routes/videos.routes")
const PORT=2300
const app=express()

app.use(express.json())
app.use("/api/v1",UsersRoutes)
app.use("/api/v1",CoursesRoutes)
app.use("/api/v1",CategoriesRoutes)
app.use("/api/v1",VideosRoutes)

db.authenticate()
.then( ()=>console.log("autenticacion exitosa")) 
.catch((error)=>console.log(error));

db.sync({force:false})
.then(()=>console.log("Database sincronizada"))
.catch((error)=>console.error(error))

initmodel()

app.get("/",(req,res)=>{
    res.json({message:"Welcome server"})
})

app.listen(PORT,()=>{
console.log("servidor escuchando en el puerto 2300")
})