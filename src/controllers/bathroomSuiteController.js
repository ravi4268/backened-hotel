const BathroomSuite = require("../models/BathroomSuite");


// CREATE

const createBathroomSuite = async(req,res)=>{

try{

const data = await BathroomSuite.create(req.body);


res.status(201).json({

success:true,

message:"Bathroom suite created successfully",

data

});


}
catch(error){

res.status(500).json({

success:false,

message:error.message

});

}

};




// GET ALL

const getBathroomSuites = async(req,res)=>{


try{


const data = await BathroomSuite.find();


res.status(200).json({

success:true,

count:data.length,

data

});


}
catch(error){

res.status(500).json({

success:false,

message:error.message

});


}


};




// GET SINGLE

const getBathroomSuiteById = async(req,res)=>{


try{


const data = await BathroomSuite.findById(
req.params.id
);



if(!data){

return res.status(404).json({

success:false,

message:"Bathroom Suite not found"

});

}



res.status(200).json({

success:true,

data

});


}
catch(error){

res.status(500).json({

success:false,

message:error.message

});

}


};






// UPDATE

const updateBathroomSuite = async(req,res)=>{


try{


const data =
await BathroomSuite.findByIdAndUpdate(

req.params.id,

req.body,

{
new:true
}

);



if(!data){

return res.status(404).json({

success:false,

message:"Bathroom Suite not found"

});

}



res.status(200).json({

success:true,

message:"Updated successfully",

data

});


}
catch(error){

res.status(500).json({

success:false,

message:error.message

});


}


};






// DELETE


const deleteBathroomSuite = async(req,res)=>{


try{


const data =
await BathroomSuite.findByIdAndDelete(
req.params.id
);



if(!data){

return res.status(404).json({

success:false,

message:"Bathroom Suite not found"

});

}



res.status(200).json({

success:true,

message:"Deleted successfully"

});


}
catch(error){


res.status(500).json({

success:false,

message:error.message

});


}


};




module.exports={

createBathroomSuite,

getBathroomSuites,

getBathroomSuiteById,

updateBathroomSuite,

deleteBathroomSuite

};