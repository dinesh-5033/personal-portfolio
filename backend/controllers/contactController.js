const Contact=require("../models/Contact");

const addContact=async(req,res)=>{

    try{

        const contact=new Contact(req.body);

        await contact.save();

        res.status(201).json({
            message:"Message Sent Successfully"
        });

    }

    catch(error){

        res.status(500).json({
            message:error.message
        });

    }

};

module.exports={
    addContact
};