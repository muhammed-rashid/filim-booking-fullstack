const { screenHelper } = require("../../helpers/screenHelper");
module.exports.screenController = {
  getAll: async (req, res) => {
    try {
      let screen = await screenHelper.getAll();
      return res.status(200).json({
        success: true,
        message: "Screens Found",
        data: screen,
      });
    } catch (err) {
      next(err);
    }
  },
  //create screen
  create: async (req, res, next) => {
    try {
      let screen = screenHelper.store(req.body);
      return res.status(200).json({
        success: true,
        message: "Screen added successfully",
        data: screen,
      });
    } catch (error) {
      next(error);
    }
  },
  show: async (req, res, next) => {
    let screen = await screenHelper.findById(req.params.id);
    if(screen){
      return res.status(200).json({
        success:true,
        data:screen
      })
    }
    next("Screen Not found");
  },
  update: async (req, res, next) => {
    try {
      let screen = await screenHelper.update(req.body);
      return res.status(200).json({
        status: true,
        message: "Screen updated successfully",
        data: screen,
      });
    } catch (err) {
      next(err);
    }
  },
  delete: async (req, res, next) => {
    try {
      let screen = await screenHelper.delete(req.params.id);
      return res.status(200).json({
        success: true,
        message: "Screen deleted successfully",
      });
    } catch (err) {
      next(err);
    }
  },
};
