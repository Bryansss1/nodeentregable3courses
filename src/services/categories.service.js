const Categories = require("../models/categories.model");



class categoriesServices{
    static async getAll(){
        try {
            const result=await Categories.findAll({attributes:["id","name"]})
            return result
        } catch (error) {
            throw error
        }
    }

    static async getOne(id){
        try {
            const result=await Categories.findByPk(id,{attributes:["id","name"]})
            return result
        } catch (error) {
            throw error
        }
    }

    static async postOne(newCa){
        try {
            const result=await Categories.create(newCa)
            return result
        } catch (error) {
            throw error
        }
    }

    static async deleteOne(id){
        try {
            const result=await Categories.destroy({where:{id}})
            return result
        } catch (error) {
            throw error
        }
    }
}

module.exports=categoriesServices;