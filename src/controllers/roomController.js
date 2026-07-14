const Room = require("../models/Rooms");

const createRoom = async (req,res)=>{
    try {

        const room = await Room.create(req.body);

        res.status(200).json({
            success:true,
            message:"Room created successfully",
            data:room
        });

    } catch(error){
        res.status(500).json({
            success:false,
            message:error.message
        });
    }
};



// GET ALL ROOMS
const getRooms = async(req,res)=>{
    try {

        const rooms = await Room.find();

        res.status(200).json({
            success:true,
            message:"Rooms fetched successfully",
            data:rooms
        });

    }catch(error){

        res.status(500).json({
            success:false,
            message:error.message
        });

    }
};



// UPDATE ROOM
const updateRoom = async(req,res)=>{
    try {

        const room = await Room.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new:true
            }
        );


        res.status(200).json({
            success:true,
            message:"Room updated",
            data:room
        });


    }catch(error){

        res.status(500).json({
            success:false,
            message:error.message
        });

    }
};



// DELETE ROOM
const deleteRoom = async(req,res)=>{
    try {

        await Room.findByIdAndDelete(req.params.id);


        res.status(200).json({
            success:true,
            message:"Room deleted"
        });


    }catch(error){

        res.status(500).json({
            success:false,
            message:error.message
        });

    }
};



module.exports={
    createRoom,
    getRooms,
    updateRoom,
    deleteRoom
};