const Categories = require("../models/categories.model")
const Courses = require("../models/courses.model")
const Courses_Categories = require("../models/courses_categories.model")
const Users = require("../models/users.model")
const UsersCourses = require("../models/users_courses.model")
const Videos = require("../models/videos.model")
const db=require("../utils/db")

const users=[
    {first_name:"bryan",last_name:"david",password:"12345",email:"bryans@gmail.com"},
    {first_name:"juan",last_name:"javier",password:"12345",email:"juan@gmail.com"},
    {first_name:"ana",last_name:"samantha",password:"12345",email:"ana@gmail.com"},
    {first_name:"pedro",last_name:"andres",password:"12345",email:"pedro@gmail.com"},
]

const categories=[
    {name:"frontend"},
    {name:"backend"},
    {name:"desing"},
    {name:"framework"},
]


const courses=[
    {title:"bases del desarrollo web",description:"en este curso aprenderas todo lo basico del desarrollo web frontend",instructor:"bryan sanabria"},
    {title:"react desde cero",description:"los pilares fundamentales de react en este curso se enseñaran paso a paso",instructor:"roberto gomez"},
    {title:"nodejs desde cero",description:"en este curso veras los principios de nodejs y reforzar todas sus bases",instructor:"lucero pazcal"},
]

const videos=[
    {title:"curso css/html5",url:"https://www.youtube.com/watch?v=ry8fwA2260c",course_id:1},
    {title:"curso javascript",url:"https://www.youtube.com/watch?v=ry8fwA2260c",course_id:1},
    {title:"curso react 1h",url:"https://www.youtube.com/watch?v=ry8fwA2260c",course_id:2},
    {title:"nodejs curso",url:"https://www.youtube.com/watch?v=ry8fwA2260c",course_id:3}
]

const users_courses=[
    {user_id:1,course_id:1},
    {user_id:1,course_id:2},
    {user_id:1,course_id:3},
    {user_id:2,course_id:2},
    {user_id:3,course_id:3},
    {user_id:4,course_id:1},
]

const coursers_categories=[
    {course_id:1,category_id:1},
    {course_id:1,category_id:3},
    {course_id:2,category_id:1},
    {course_id:2,category_id:3},
    {course_id:3,category_id:2},
]

db.sync({force:true})
.then(()=>{
    console.log("coming seeds")

    users.forEach(user=>Users.create(user))
    setTimeout(()=>{
        categories.forEach(cate=>Categories.create(cate))
    },100)
    setTimeout(()=>{
        courses.forEach(co=>Courses.create(co))
    },150)
    setTimeout(()=>{
        videos.forEach(video=>Videos.create(video))
    },200)
    setTimeout(()=>{
       users_courses.forEach(usc=>UsersCourses.create(usc))
    },250)
    setTimeout(()=>{
        coursers_categories.forEach(cate=>Courses_Categories.create(cate))
    },300)
})
.catch((error)=>console.log(error))
