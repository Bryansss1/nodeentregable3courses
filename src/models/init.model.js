const db =require("../utils/db")
const Users=require("../models/users.model")
const UsersCourses=require("../models/users_courses.model")
const Categories=require("../models/categories.model")
const Videos=require("../models/videos.model")
const Courses_Categories=require("../models/courses_categories.model")
const Courses=require("../models/courses.model")

const initmodel=()=>{

UsersCourses.belongsTo(Users,{as:"user",foreignKey:"user_id"})
Users.hasMany(UsersCourses,{as:"users_courses",foreignKey:"user_id"})

UsersCourses.belongsTo(Courses,{as:"course",foreignKey:"course_id"})
Courses.hasMany(UsersCourses,{as:"users_courses",foreignKey:"course_id"})

Videos.belongsTo(Courses,{as:"course",foreignKey:"course_id"})
Courses.hasMany(Videos,{as:"video",foreignKey:"course_id"})

Courses_Categories.belongsTo(Categories,{as:"category",foreignKey:"category_id"})
Categories.hasMany(Courses_Categories,{as:"course_categories",foreignKey:"category_id"})

Courses_Categories.belongsTo(Courses,{as:"course",foreignKey:"course_id"})
Courses.hasMany(Courses_Categories,{as:"course_categories",foreignKey:"course_id"})
}


module.exports=initmodel