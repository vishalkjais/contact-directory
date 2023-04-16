const express=require('express');

const router=express.Router();

const postController=require('../controllers/users_post');

router.get('/post',postController.post);


module.exports=router;