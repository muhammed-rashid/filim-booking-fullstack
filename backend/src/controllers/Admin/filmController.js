
const { Result } = require("express-validator");
const { filimHelper } = require("../../helpers/filimHelper")

module.exports.filimController = {

    // CREATING NEW FILIM DETAILS
    create: async (req, res, next) => {

        try {
            await filimHelper.create(req.body).then((filims) => {
                return res.status(200).json({
                    success: true,
                    message: "New filim Added successfully",
                    data: filims,
                });
            })
        } catch (error) {
            next(error)
        }
    },

    // FETCHING ALL FLIMS....
    getFilims: (req, res, next) => {

        try {
            filimHelper.getAll(req.body).then((filims) => {
                return res.status(200).json({
                    success: true,
                    message: "Filim found",
                    data: filims
                })
            })
        } catch (error) {
              next(error)
        }
    },
    // FIND FILIM BY ID......
    show: (req, res, next) => {

        filimHelper.fingById(req.params.id).then((films) => {
            return res.status(200).json({
                success: true,
                message:"Filim found",
                data: films
            })
        })
    },
    // DELETE FILIM
    delete: (req, res,next) => {
        try {
            
            filimHelper.deleteFilm(req.params.id).then((result) => {

                return res.status(200).json({
                    success:true,
                    message:"Filim deleted successfully"
                })
            })
        } catch (error) {

            next(error)
           
        }

    },
    // UPDATE FILIMS
    update: (req,res) => {
        try {
            filimHelper.updateFilm(req.body).then((result) => {
                return res.status(200).json({
                    success:true,
                    message:"Filim updated successfully",
                    data:result
                })
            })
        } catch (error) {
             next(error)
        }

    }
}