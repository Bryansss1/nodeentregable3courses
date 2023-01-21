const Courses_Categories = require("../models/courses_categories.model")
const CoursesServices=require("../services/courses.service")



const getAllcourses=async(req,res)=>{
    try {
        const result=await CoursesServices.getAll()
        res.json(result)
    } catch (error) {
        res.status(404).json({message:"error de peticion"})
    }
}

const getOnecourses=async(req,res)=>{
    try {
        const {id}=req.params
        const result=await CoursesServices.getOne(id)
        res.json(result)
    } catch (error) {
        res.status(404).json({message:"error de peticion"})
    }
}

const DeleteCourses=async(req,res)=>{
    try {
        const {id}=req.params
        const result=await CoursesServices.deleteOne(id)
        res.status(201).json(result)
    } catch (error) {
        res.status(404).json({message:"error de peticion"})
    }
}

const CreateCourses=async(req,res)=>{
    try {
        const newCourse=req.body
        const result=await CoursesServices.postOne(newCourse)
        res.status(201).json(result)
    } catch (error) {
        res.status(404).json({message:"error de peticion"})
    }
}

const updateCourse=async(req,res)=>{
    try {
        const {id}=req.params
        const updateboyd=req.body
        const result=await CoursesServices.putOne(updateboyd,id)
        res.json(result)
    } catch (error) {
        res.status(404).json({message:"error de peticion"})
    }
}

const getVideos=async(req,res)=>{
    try {
        const result=await CoursesServices.getVideoss()
        res.json(result)
    } catch (error) {
        res.status(404).json({message:"error de peticion"})
    }
}

const getCategories=async(req,res)=>{
    try {
        const result=await CoursesServices.getCategoriess()
        res.json(result)
    } catch (error) {
        res.status(404).json({message:"error de peticion"})
    }
}
module.exports={
    getAllcourses,
    getOnecourses,
    DeleteCourses,
    CreateCourses,
    updateCourse,
    getVideos,
    getCategories
}