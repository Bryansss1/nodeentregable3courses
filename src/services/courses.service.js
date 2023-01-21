
const Categories = require("../models/categories.model")
const Courses=require("../models/courses.model")
const Courses_Categories = require("../models/courses_categories.model")
const Videos=require("../models/videos.model")



class CoursesServices{

static async getAll(){
    try {
        const result=await Courses.findAll({
                include:[{
                    model:Courses_Categories,
                    as:"course_categories",
                    attributes:["id"],
                    include:{
                        model:Categories,
                        as:"category",
                        attributes:["name"],
                        }
                    },
                    {
                    model:Videos,
                    as:"video",
                    attributes:["title","url"],
                    }
                    ]
} 
)
return result
} catch (error) {
    throw error
}
}    

static async getOne(id){
try {
    const result=await Courses.findByPk(id)
    return result
} catch (error) {
    throw error
}
}

static async deleteOne(id){
    try {
        const result=await Courses.destroy({where:{id}})
        return result
    } catch (error) {
        throw error
    }
}

static async postOne(newCourse){
    try {
        const result=await Courses.create(newCourse)
        return result
    } catch (error) {
        throw error
    }
}

static async putOne(bodyupdate,id){
    try {
        const find=await Courses.findOne({where:{title:bodyupdate.title}})
       if(find){
        const up=await Courses.update({...bodyupdate,title:find.dataValues.title,instructor:find.dataValues.instructor},{where:{id}})
        return up
       }
    } catch (error) {
        throw error
    }
}

static async getVideoss(){
    try {
        const findd=await Courses.findAll(
            {
                attributes:["title","description"],
                    include:{
                        model:Videos,
                        as:"video",
                        attributes:["title","url"],
                }
            }
        )
        return findd
    } catch (error) {
        throw error
    }
}

static async getCategoriess(){
    try {
        const findd= await Categories.findAll({attributes:["name","id"]})
        return findd
    } catch (error) {
        throw error
    }
}

}


module.exports=CoursesServices;