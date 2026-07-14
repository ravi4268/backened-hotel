const MediaGallery = require("../models/MediaGallery");

// CREATE
const createMediaGallery = async(req,res)=>{

try{

const data = await MediaGallery.create(req.body);

res.status(201).json({
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



// GET ALL

const getMediaGalleries = async (req,res)=>{

  try {

    const data = await MediaGallery.find();


    res.status(200).json({

      success:true,

      data:data

    });


  } catch(error){

    res.status(500).json({

      success:false,

      message:error.message

    });

  }

};





// GET BY ID

const getMediaGalleryById = async(req,res)=>{

try{

const data =
await MediaGallery.findById(req.params.id);


if(!data){

return res.status(404).json({

success:false,

message:"Media not found"

});

}


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






// UPDATE

const updateMediaGallery = async(req,res)=>{

try{


const data =
await MediaGallery.findByIdAndUpdate(

req.params.id,

req.body,

{
new:true
}

);



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







// DELETE

const deleteMediaGallery = async(req,res)=>{

try{


await MediaGallery.findByIdAndDelete(
req.params.id
);



res.status(200).json({

success:true,

message:"Media deleted successfully"

});


}catch(error){

res.status(500).json({

success:false,

message:error.message

});


}

};




module.exports={

createMediaGallery,

getMediaGalleries,

getMediaGalleryById,

updateMediaGallery,

deleteMediaGallery

};