const { json } = require("sequelize")
const VideoServices = require("../services/videos.service")


const getAllvideos=async(req,res)=>{
    try {
        const result=await VideoServices.getAll()
        res.json(result)
    } catch (error) {
        res.status(404),json({message:error})
    }
}

const getonevideos=async(req,res)=>{
    try {
        const {id}=req.params
        const result=await VideoServices.getOne(id)
        res.json(result)
    } catch (error) {
        res.status(404),json({message:error})
    }
}

const getPostvideos=async(req,res)=>{
    try {
        const newV=req.body
        const result= await VideoServices.postOne(newV)
        res.json(result)
    } catch (error) {
        res.status(404),json({message:error})
    }
}

const getDeletevideos=async(req,res)=>{
    try {
        const {id}=req.params
        const result=await VideoServices.deleteOne(id)
        res.json(result)
    } catch (error) {
        res.status(404),json({message:error})
    }
}

const getUpdatevideos=async(req,res)=>{
    try {
        const newV=req.body
        const {id}=req.params
        const result=await VideoServices.updateVideo(newV,id)
        res.json(result)
    } catch (error) {
        res.status(404),json({message:error})
    }
}


module.exports={
    getAllvideos,
    getonevideos,
    getPostvideos,
    getUpdatevideos,
    getDeletevideos,
}