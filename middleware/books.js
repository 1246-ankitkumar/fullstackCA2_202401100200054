const mongoose=require('mongoose');

const BooksSchema=new mongoose.Schema({
    id:{
        type:Number
    },
    title:{
        type:String
    }

    ,
    author:{
        type:String
    }
    ,category:{
        type:String

    },
    availablity:{
        type:String
    }
     
},timestamps=true)
const BooksModel=mongoose.model("Books",BooksSchema);

module.exports=BooksModel

