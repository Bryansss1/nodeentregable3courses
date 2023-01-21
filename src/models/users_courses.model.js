const db =require("../utils/db")

const {DataTypes}=require("sequelize")
const Users = require("./users.model")
const Courses = require("./courses.model")


const UsersCourses=db.define("users_courses",{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false,
        unique:true,
    },
    user_id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model:Users,
            key:"id",
        }
    },
    course_id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model:Courses,
            key:"id",
        },
    }
})

module.exports=UsersCourses;