const express=require('express');
const app=express();
const port=8000;



//use express router
app.use('/',require('./routes'));

//set up view
app.set('view engine','ejs');
app.set('views','./views');


app.listen(port,function(err){
    if(err){
        //console.log('error',err);
         console.log(`Error in running the server: ${err}`);

         
    }
    console.log(`server is running on port:${port}`);
});