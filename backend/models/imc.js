//import mongoose module
const mongoose= require("mongoose");

//create match scemha
const imcSchema= mongoose.Schema({
    name:String,
    taille:Number,
    poids:Number,
    imc:Number


});
//affect model name to schema
const imc=mongoose.model("Imc",imcSchema);
//export match
module.exports=imc;