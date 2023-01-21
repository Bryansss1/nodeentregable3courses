const db =require("../utils/db")


const {DataTypes}=require("sequelize")


const Categories=db.define("categories",{
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        unique:true,
        autoIncrement:true,
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true,
    },
})

module.exports=Categories