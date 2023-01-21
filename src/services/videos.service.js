const Videos = require("../models/videos.model")



class VideoServices{

    static async getAll(){
        try {
            const result=await Videos.findAll({attributes:["id","title","url"]})
            return result
        } catch (error) {
            throw error
        }
    }

    static async getOne(id){
        try {
            const result=await Videos.findByPk(id,{attributes:["id","title","url"]})
            return result
        } catch (error) {
            throw error
        }
    }

    static async postOne(newVi){
        try {
            const result=await Videos.create(newVi)
            return result
        } catch (error) {
            throw error
        }
    }

    static async deleteOne(id){
        try {
            const result=await Videos.destroy({where:{id}})
            return result
        } catch (error) {
            throw error
        }
    }

    static async updateVideo(newb,id){
        try {
            const result=await Videos.update(newb,{where:{id}})
            return result
        } catch (error) {
            throw error
        }
    }
}


module.exports=VideoServices