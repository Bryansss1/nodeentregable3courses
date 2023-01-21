const {Router}=require("express")
const { getAllcourses, getOnecourses, DeleteCourses, CreateCourses, updateCourse, getVideos, getCategories } = require("../controllers/courses.controller")
const router=Router()

router.get("/courses",getAllcourses)
router.get("/courses/:id",getOnecourses)
router.delete("/courses/:id",DeleteCourses)
router.put("/courses/:id",updateCourse)
router.post("/courses",CreateCourses)
router.get("/courses&categories",getCategories)
router.get("/courses&videos",getVideos)

module.exports=router;