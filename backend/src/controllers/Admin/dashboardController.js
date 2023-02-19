module.exports.dashboardController = {
    index : (req,res)=>{
        return res.status(200).json({
            user:req.user
        });
    }
}