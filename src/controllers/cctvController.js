const cctv = require("../models/Cctv");

const createCamera = async(req,res) => {
    try {
       const camera = await cctv.create(req.body);
       
       return res.status(201).json({
        success:true,
        message:"Camera Added Successfully",
        data:camera
       });     
    } catch (error) {
        console.log(error);
        return res.status(500).json({
        success:false,
        message:"Internal Server Error",
        error:error.message    
        });       
    }
};

const getAllCamera = async(req,res) => {
    try {
      const camera = await cctv.find();
      return res.status(200).json({
       success:true,
       message: "Cameras retrieved successfully",
       count: camera.length,
       data:camera 
      });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
        success:false,
        message:"Internal Server Error",
        error:error.message    
        }); 
    }
};

module.exports = {
    createCamera,
    getAllCamera
}