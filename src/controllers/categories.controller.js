const categoriesServices = require("../services/categories.service")



const getAllcategories=async(req,res)=>{
    try {
        const result=await categoriesServices.getAll()
        res.json(result)
    } catch (error) {
        res.status(404).json({message:error})
    }
}

const getOnecategories=async(req,res)=>{
    try {
        const {id}=req.params
        const result=await categoriesServices.getOne(id)
        res.json(result)
    } catch (error) {
        res.status(404).json({message:error})
    }
}

const deleteCategories=async(req,res)=>{
    try {
        const {id}=req.params
        const result=await categoriesServices.deleteOne(id)
        res.json(result)
    } catch (error) {
        res.status(404).json({message:error})
    }
}

const postCategories=async(req,res)=>{
    try {
        const newCate=req.body
        const result=await categoriesServices.postOne(newCate)
        res.status(201).json(result)
    } catch (error) {
        res.status(404).json({message:error})
    }
}


module.exports={
    getAllcategories,
    getOnecategories,
    deleteCategories,
    postCategories
}