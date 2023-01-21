const {Router}=require("express")
const { getAllvideos, getonevideos, getPostvideos, getDeletevideos, getUpdatevideos } = require("../controllers/video.controller")
const router=Router()


router.get("/videos",getAllvideos)
router.get("/videos/:id",getonevideos)
router.post("/videos",getPostvideos)
router.delete("/videos/:id",getDeletevideos)
router.put("/videos/:id",getUpdatevideos)


module.exports=router