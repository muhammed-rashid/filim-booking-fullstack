const { teatorHelper } = require('../../helpers/teatorHelper')


module.exports.teatorController = {

    create:  (req, res, next) => {
        console.log("CONTROLLER WORKING");

        try {
            console.log(" TRY WORKING");

            teatorHelper.create(req.body).then((teator) => {
                console.log("CREATED DATA IS " , teator);
                return res.status(200).json({
                    success: true,
                    message: "New District Added successfully",
                    data: newTeator,
                });
            })

        } catch (error) {

        }

    },

    getTeator:  (req, res) => {

         teatorHelper.getAll().then((teators) => {

            console.log("GET DATAS ARE:", teators);
            res.status(200).json(teators)
        })
        try {

        } catch (error) {

        }

    },
    update : (req,res) => {

        teatorHelper.updateTeator(re.body).then((result) =>{

             return res.status(200).json({
                success:true,
                message:"Teator updated successfully"
              });
        })

    },

    delet : (req, res) => {

        teatorHelper.deleteTeator(req.body).then((result) => {

            return res.status(200).json({
                success:true,
                message:"Teator deleted successfully"
              });
        })

    }
}