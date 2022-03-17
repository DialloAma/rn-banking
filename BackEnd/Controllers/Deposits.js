const depositModel = require("../Modules/Deposits");
const accountModel = require("../Modules/Accounts")

const CreateDepositController=(req,res)=>{
    const {accountnumber,amount,datdep}=req.body;
   /* try {
        const depo= new depositModel({accountnumber,amount,datdep});
    const depot = await depo.save();
    if(depot){
         const acount= await Account.findOne({accountnumber});
         if(acount){
            const balance= acount.balance + amount;
            const accupd = await  Account.findByIdAndUpdate({balance})
             res.json({accountnumber:accupd});
             res.json({message:"deposite succeful", data:depot});
         }
         res.json({message:"not found"}) 
        
      }  



    } catch (error) {
        
    }*/

    try {
      const depo= new depositModel({accountnumber,amount,datdep});
       depo.save().then((depot)=>{
           if(depot){
            accountModel.findOne({accountnumber})
            .then((acc)=>{
             if(!acc){
                res.json({error:"not found"}) 
             }
             const balance= acc.balance + amount
             accountModel.findOneAndUpdate({accountnumber},
               {$set:{balance:+balance}},
               {new:true},
               (err)=>{
                   if(err){
                    res.json({message:"not updated"})   
                   }
               })
         })
         res.json({message:"deposite succeful", data:depot});
           }
       })
        
    } catch (error) {
        console.log(error)
    }
}
const getAllDeposits=async(req,res)=>{
    try {
        const Alldeposit = await depositModel.find();
        res.json({data:Alldeposit})
    } catch (error) {
        console.log(error)
    }

}

module.exports={CreateDepositController,getAllDeposits};