const Rating = require("../models/Rating");



const createRating = async(req,res)=>{

try{

const data = await Rating.create(req.body);


res.status(201).json({success:true,data:data});


}catch(error){

res.status(500).json({

    success:false,

    message:error.message

});

}

};




// Get All Rating

const getRatings = async(req,res)=>{

try{


const data = await Rating.find();


res.status(200).json({

success:true,

data:data

});


}catch(error){

res.status(500).json({

success:false,

message:error.message

});

}

};



module.exports={
createRating,
getRatings
};