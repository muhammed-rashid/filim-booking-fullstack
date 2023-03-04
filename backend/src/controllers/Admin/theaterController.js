const { theaterHelper } = require('../../helpers/theaterHelper')


module.exports.theaterController = {

    create:  (req, res, next) => {
        try {
        
            theaterHelper.create(req.body).then((theater) => {
                return res.status(200).json({
                    success: true,
                    message: "New theater Added successfully",
                    data: theater,
                });
            })

        } catch (error) {
            next(error)
        }

    },

    //find one theator
    show:async(req,res,next)=>{
        let theater = await theaterHelper.findById(req.params.id);
        if(theater){
          return res.status(200).json({
            success:true,
            data:theater
          })
        }
        next("theator Not found");
      },
    

    getTheater:  (req, res,next) => {
        try {
            theaterHelper.getAll().then((data) => {
                res.status(200).json({
                    success:true,
                    message:"Theaters found",
                    data:data
                })
            })

        } catch (error) {
            next(error)
        }

    },
    update : (req,res,next) => {

        theaterHelper.updateTheater(req.body).then((result) =>{
             return res.status(200).json({
                success:true,
                message:"Theater updated successfully",
                data:result
              });
        }).catch(err=>{
            next(err)
        })

    },
    //delete theator
    delete : (req, res,next) => {
        theaterHelper.deleteTheater(req.body).then((result) => {
            return res.status(200).json({
                success:true,
                message:"Theater deleted successfully"
              });
        }).catch(err=>{
            next(err)
        })

    }
}