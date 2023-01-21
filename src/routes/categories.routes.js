const {Router}=require("express")
const { getAllcategories, postCategories, deleteCategories, getOnecategories } = require("../controllers/categories.controller")

const router=Router()


router.get("/categories",getAllcategories)
router.post("/categories",postCategories)
router.delete("/categories/:id",deleteCategories)
router.get("/categories/:id",getOnecategories)
module.exports=router