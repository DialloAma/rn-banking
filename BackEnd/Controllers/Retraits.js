const RetraitModel =require("../Modules/Retraits");
const accountModel =require("../Modules/Accounts")
const CreateRetraitController= async(req,res)=>{
    const {accountnumber,amount,datretr}=req.body;
      const retrait = new RetraitModel({accountnumber,amount,datretr});
      try {
        
          const Account = await accountModel.findOne({accountnumber})
          if(!Account){
              res.json({message:"Not find"});
          }
          const benefit= amount/100
          const amounttot= amount+benefit
          if(Account.balance > amounttot){
            const retire = await retrait.save();
            const balance = Account.balance - amounttot
            accountModel.findOneAndUpdate({accountnumber},
              {$set:{balance}},
              {new:true},
              (err)=>{
                  if(err){
                      res.json({message:"Not Updated"})
                  }
                }
              )
              
              console.log(amounttot)
              res.json({message:"withdraw successfully",data:retire})
          }else{
            console.log("you can't make a withdraw, your balance is less than your amount")
          }
          
      } catch (error) {
          console.log(error)
      }
      
}
const getAllWithdraws=async(req,res)=>{
    try {
      const allretrait = await RetraitModel.find();
      res.json({data:allretrait})
    } catch (error) {
      
    }
}
module.exports= {CreateRetraitController,getAllWithdraws}