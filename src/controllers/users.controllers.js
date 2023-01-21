const UsersServices=require("../services/users.service")



const getAllusers=async(req,res)=>{
try {
    const result=await UsersServices.getAll()
    res.status(200).json(result)
} catch (error) {
    res.status(404).json({message:"error"})
}
}

const getOneuser=async(req,res)=>{
    try {
        const {id}=req.params
        const result=await UsersServices.getOne(id)
        res.json(result)
    } catch (error) {
        res.status(404).json({message:"error"})
    }
}

const getCoursesUser=async(req,res)=>{
    try {
        const {id}=req.params
        const result=await UsersServices.getCourses(id)
        res.json(result)
    } catch (error) {
        res.status(404).json({message:"error"})
    }
}

const postUser=async(req,res)=>{
try {
    const Newuser=req.body
    const result=await UsersServices.aggUser(Newuser)
    res.json(result)
} catch (error) {
    res.status(404).json({message:"error"})
}
}

const putUser=async(req,res)=>{
try {
    const {id}=req.params
    const updateUser=req.body
    const result=await UsersServices.updateUser(id,updateUser)
    res.json(result)
} catch (error) {
    res.status(404).json({message:"error"})
}
}

const deleteUser=async(req,res)=>{
try {
    const {id}=req.params
    const result=await UsersServices.deleteUser(id)
    res.json(result)
} catch (error) {
    res.status(404).json({message:"error"})
}   
}

const postCourseUser=async (req,res)=>{
    try {
        const{id,course_id}=req.params
        const result=await UsersServices.aggCourses(id,course_id)
        res.json(result)
    } catch (error) {
        res.status(404).json({message:"error"})
    }
}


module.exports={
    getAllusers,
    getOneuser,
    getCoursesUser,
    deleteUser,
    postUser,
    putUser,
    postCourseUser
}