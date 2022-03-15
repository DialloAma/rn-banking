const accountModel=require("../Modules/Accounts");

const CreateAccountController= async(req,res)=>{
    const {cltid,accountnumber,balance,datec}=req.body;
    try {
        const Acc= new accountModel({cltid,accountnumber,balance,datec});
        const Account= await Acc.save();
        if(Account){
            res.json({message:"Create succefully", data: Account})
        }
        
    } catch (error) {
        console.log(error)
    }

}
const getAllAccountController = async (req,res)=>{
    try {
        const allaccount = await accountModel.find();
        res.json({data:allaccount})
    } catch (error) {
        console.log(error)
    }

}

module.exports={CreateAccountController,getAllAccountController};