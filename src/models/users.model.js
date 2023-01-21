const db =require("../utils/db")


const {DataTypes}=require("sequelize")

const Users=db.define("users",{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false,
        unique:true,
    },
    first_name:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    last_name:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true,
        validate:{
            isEmail:true,
        }
    },
})

module.exports=Users;