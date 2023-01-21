const db =require("../utils/db")


const {DataTypes}=require("sequelize")
const Courses = require("./courses.model")

const Videos=db.define("videos",{
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
    url:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            isUrl:true
        }
    },
    course_id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model:Courses,
            key:"id",
        }
    }
})

module.exports=Videos