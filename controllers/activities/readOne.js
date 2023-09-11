import Activity from "../../models/Activity.js";

export default async(req, res)=>{
    try{
        let oneAct = await Activity
        .findOne({_id:req.params._id})
        .select("name photo itinerary_id")
        return res.status(200).json({
            success: true,
            message:'found activity',
            response: oneAct
        })
    }catch(error){
        return res.status(400).json({
            success:false,
            message:'activity NOT found',
            response: null
        })
    }
}