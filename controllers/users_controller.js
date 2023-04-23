const User=require('../models/user');
module.exports.profile=function(req,res){
    //res.end('<h1> User Profile vishal</h1>');
    return res.render('user_profie',{
        title:"profile"
    });


}
 
//render the sign up page
module.exports.signUp=function(req,res){
    return res.render('user_sign_up',{
        title:"codeial | Sign Up"
    })
}
//render the sign in page
module.exports.signIn=function(req,res){
    return res.render('user_sign_in',{
        title:"codeial | Sign In "
    })
}

//get the sign up data
module.exports.create=function(req,res){
    //to do later
    if(req.body.password!=req.body.confirm_password){
        return res.redirect('back');
    }

    User.findOne({email:req.body.email},function(err,user){
        if(err){console.log('error in finding user in signing Up'); return }

        if(!user){
            User.create(req.body,function(err,user){
                if(err){console.log('error in creating user while signing up'); return }
               
                return res.redirect('/users/sign-in');
            })
        }
        else {
            return res.redirect('back');
        }
    });


}

module.exports.createSession=function(req,res)
{
    //baad me krenge
}