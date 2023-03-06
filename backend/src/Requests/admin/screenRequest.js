const { check,body } = require("express-validator");

module.exports.screenCreateRequest = [
    check("name").exists({ checkFalsy: true }).withMessage("Name is required"),
    check("theater").exists({checkFalsy:true}).withMessage("theater is required"),
    check("noOfSlots").exists({checkFalsy:true}).withMessage('no of slots is required')
   
    
]
module.exports.screenUpdateRequest = [
    check("name").exists({ checkFalsy: true }).withMessage("Name is required"),
    check("theater").exists({checkFalsy:true}).withMessage("theater is required"),
    check("noOfSlots").exists({checkFalsy:true}).withMessage('no of slots is required'),
    check('id').exists({checkFalsy:true}).withMessage("Screen id is required")
   
    
]