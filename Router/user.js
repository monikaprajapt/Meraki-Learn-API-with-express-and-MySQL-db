const express = require("express")
const router=express.Router()
const coursedata=require('../controller/user')


router.get('/course',coursedata.get_course_data)
router.get('/course/:id',coursedata.get_course_id)
router.put('/course/update/:id',coursedata.course_update_data)
router.post('/course/post',coursedata.course_post_data)
router.delete('/course/delete/:id',coursedata.course_delete_data)

module.exports=router
