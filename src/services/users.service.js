const Categories = require("../models/categories.model");
const Courses = require("../models/courses.model");
const Courses_Categories = require("../models/courses_categories.model");
const Users = require("../models/users.model");
const UsersCourses = require("../models/users_courses.model");




class UsersServices{

static async getAll(){
try {
    const result=await Users.findAll({attributes:{exclude:["createdAt","password","updatedAt"]}})
    return result
} catch (error) {
    throw error
}
}    

static async getOne(id){
    try {
        const result=await Users.findByPk(id,{attributes:{exclude:["createdAt","password","updatedAt"]}})
        return result
    } catch (error) {
        throw error
    }
}

static async getCourses(id){
try {
    const result=await Users.findOne({
        where:{id},
        include:{
            model:UsersCourses,
            as:"users_courses",
            attributes:["course_id"],
            include:{
            model:Courses,
            as:"course",
            attributes:["title"],
            include:{
                model:Courses_Categories,
                as:"course_categories",
                attributes:["category_id"],
                include:{
                    model:Categories,
                    as:"category",
                    attributes:["name"]
                }
            }
            }
        }
    })
    return result
} catch (error) {
    throw error
}
}

static async deleteUser(id){
    try {
        const result=await Users.destroy({where:{id}})
        return result;
    } catch (error) {
        throw error
    }
}

static async aggUser(user){
try {
    const result=await Users.create(user)
    return result
} catch (error) {
    throw error
}
}

static async updateUser(id,newuser){
try {
const find=await Users.findByPk(id)
if(!newuser.first_name){
    const result=await Users.update({...newuser,first_name:find.dataValues.first_name},{where:{id}})
    return result
}
if(!newuser.last_name){
    const result=await Users.update({...newuser,last_name:find.dataValues.last_name},{where:{id}})
    return result
}
if(!newuser.email){
    const result=await Users.update({...newuser,email:find.dataValues.email},{where:{id}})
    return result
}
//console.log(find.dataValues.first_name,find.dataValues.last_name,find.dataValues.password)
if(find.dataValues.email==newuser.email){
        const result=await Users.update(newuser,{where:{id}})
        return result
}else{return {message:"el email no debe ser cambiado"}} 
}catch (error) {
    throw error
}
}

static async aggCourses(user_iid,course_iid){
try {
const find=await UsersCourses.findAll({where:{user_id:user_iid}})
const courseAgg={user_id:user_iid,course_id:course_iid}
if(find.some(per=>per.dataValues.course_id==course_iid)){
    return "ya el curso fue comprado"
}else{return await UsersCourses.create(courseAgg)}

}catch(error){
    throw error
}
}
}


module.exports=UsersServices