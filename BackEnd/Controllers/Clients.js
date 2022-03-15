const CltModel = require("../Modules/Clients")
const CreateCltController= async(req,res)=>{
    const {fullname,phone,address,dat} = req.body;
    try {
        const clt = new CltModel({fullname,phone,address,dat});
        const client = await clt.save();
        if(client){
            res.json({message:"create succeful", data:client})
        }
    } catch (error) {
       console.log(error) 
    }

}
const getAllClientController=async(req,res)=>{
    try {
        const allClt = await CltModel.find();
          res.json({data:allClt})
    } catch (error) {
        console.log(error)
    }
}
const UpdateCltControler=async(req,res)=>{
    const {_id,fullname,phone,address}=req.body
    try {
        const clt = await CltModel.findById(_id);
        if(clt){
            clt.fullname=fullname;
            clt.phone=phone;
            clt.address=address;
            clt.save();
            res.json({message: "updated succeful",clt})
           // return;
        }
        res.json({message: "not found"})
    } catch (error) {
        console.log(error)
    }

}
module.exports= {CreateCltController,getAllClientController,UpdateCltControler}