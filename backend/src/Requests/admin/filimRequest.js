const {check} = require("express-validator")

module.exports.filimCreateRequest = [
    check("name").exists({ checkFalsy: true }).withMessage("Name is required"),
    check("category").exists({checkFalsy:true}).withMessage("Category is required"),
    check("actors").exists({checkFalsy:true}).withMessage('actors is required')
    .isArray().withMessage("actors should be an array"),
    check("actors.*.name")  
    .exists({checkFalsy:true}),
    check("releasDate").exists({checkFalsy:true}).withMessage("release date is required")
    
]
module.exports.filimCreateRequest = [
    check("name").exists({ checkFalsy: true }).withMessage("Name is required"),
    check("category").exists({checkFalsy:true}).withMessage("Category is required"),
    check("actors").exists({checkFalsy:true}).withMessage('actors is required')
    .isArray().withMessage("actors should be an array"),
    check("actors.*.name")  
    .exists({checkFalsy:true}),
    check("releasDate").exists({checkFalsy:true}).withMessage("release date is required")
    
]
