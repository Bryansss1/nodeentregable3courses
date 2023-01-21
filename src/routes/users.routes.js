const {Router}=require("express")
const { getAllusers, getOneuser, getCoursesUser, deleteUser, putUser, postUser, postCourseUser } = require("../controllers/users.controllers")
const router=Router()


router.get("/users",getAllusers)
router.get("/users/:id",getOneuser)
router.get("/users/:id/courses",getCoursesUser)
router.delete("/users/:id",deleteUser)
router.put("/users/:id",putUser)
router.post("/users",postUser)
router.post("/users/:id/courses/:course_id",postCourseUser)

module.exports=router