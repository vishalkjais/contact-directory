const mongoose=require('mongoose');


mongoose.connect('mongodb://0.0.0.0/codeial_development');

const db=mongoose.connection;

db.on('error',console.error.bind(console,"error during coonecting to Mongodb"));

db.once('open',function(){
     console.log('connected to Database::MongoDB');
});

module.exports=db;
