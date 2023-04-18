module.exports.profile=function(req,res){
    //res.end('<h1> User Profile vishal</h1>');
    return res.render('user_profie',{
        title:"profile"
    });


}