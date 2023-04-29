const User=require('../models/user');
module.exports.profile=function(req,res){
   if(req.cookies.user_id){
        User.findById(req.cookies.user_id,function(err,user){
            if(user){
                return res.render('user_profile',{
                    title:"User Profile",
                    user:user
                })
            }
            return res.redirect('/users/sign-in');
        });
   }
   else{
    return res.redirect('/users/sign-in');
   }


}
 
//render the sign up p
module.exports.signUp=function(req,res){
    if(req.isAuthenticated()){
        return res.redirect('/users/profile');
    }
    return res.render('user_sign_up',{
        title:"codeial | Sign Up"
    })
}
//render the sign in page
module.exports.signIn=function(req,res){
    // agar sign kar liya to phir se sign in page pe nh jayga
    if(req.isAuthenticated()){
        return res.redirect('/users/profile');
    }
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

    User.findOne({email:req.body.email}).then (function(user){
        
       // if(err){ console.log('error in finding user in signing Up'); return }

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

// sign in and create a seesion for the user
    module.createSession=function(req,res){
        return res.redirect('/');
    }

   module.exports.createSession=function(req,res)
{
    //find the user
      User.findOne({email:req.body.email}).then(function (user){
      
     //   if(err){console.log('error in finding user in signing In'); return }
         //handle user found
           if(user){
                 //handle password which dont match
                 if(user.password!=req.body.password){
                    return res.redirect('back');
                 }

                //handle session creation
          res.cookie('user_id',user.id);
          return res.redirect('/users/profile');

                   }
           else{

                //handle user not found
                return res.redirect('back');
           }
    });
   

}
 module.exports.destroySession=function(req,res){
   // req.logout();
    //return res.redirect('/');
    //from stackoverflow
    req.logout(function(err) {
        if (err) { return next(err); }
        res.redirect('/');
      });
 }
