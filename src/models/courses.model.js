const db =require("../utils/db")


const {DataTypes}=require("sequelize")
const Categories = require("./categories.model")


const Courses=db.define("courses",{
id:{
autoIncrement:true,
primaryKey:true,
allowNull:false,
unique:true,
type:DataTypes.INTEGER
},
title:{
type:DataTypes.STRING,
allowNull:false,
},
description:{
type:DataTypes.STRING,
allowNull:false,
},
instructor:{
type:DataTypes.STRING,
allowNull:false,
},
})


module.exports=Courses