const db =require("../utils/db")


const {DataTypes}=require("sequelize")
const Courses = require("./courses.model")
const Categories = require("./categories.model")


const Courses_Categories=db.define("courses_categories",{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false,
        unique:true,
    },
    course_id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model:Courses,
            key:"id"
        }
    },
    category_id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model:Categories,
            key:"id"
        }
    }
})

module.exports=Courses_Categories
