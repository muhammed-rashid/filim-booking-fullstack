const { theaterHelper } = require('../../helpers/theaterHelper')


module.exports.theaterController = {

    create:  (req, res, next) => {
        console.log("CONTROLLER WORKING");

        try {
            console.log(" TRY WORKING");

            theaterHelper.create(req.body).then((theater) => {
                console.log("CREATED DATA IS " , theater);
                return res.status(200).json({
                    success: true,
                    message: "New theater Added successfully",
                    data: theater,
                });
            })

        } catch (error) {

        }

    },

    getTheater:  (req, res) => {

         theaterHelper.getAll().then((theaters) => {

            console.log("GET DATAS ARE:", theaters);
            res.status(200).json(theaters)
        })
        try {

        } catch (error) {

        }

    },
    update : (req,res) => {

        theaterHelper.updateTheater(req.body).then((result) =>{

             return res.status(200).json({
                success:true,
                message:"Theater updated successfully",
                data:result
              });
        })

    },

    delet : (req, res) => {

        theaterHelper.deleteTheater(req.body).then((result) => {

            return res.status(200).json({
                success:true,
                message:"Theater deleted successfully"
              });
        })

    }
}