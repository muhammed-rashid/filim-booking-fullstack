const { check,body } = require("express-validator");

module.exports.theaterCreateRequest = [
    check("name").exists({ checkFalsy: true }).withMessage("Name is required"),
    check("districtId").exists({checkFalsy:true}).withMessage("District id is required"),
    check("slots").exists({checkFalsy:true}).withMessage('slots is required')
    .isArray().withMessage("Slots should be an array"),
    check("slots.*.name")  
    .exists({checkFalsy:true}),
    check("slots.*.time").exists({checkFalsy:true})
    
]
module.exports.theaterUpdateRequest = [
    check("name").exists({ checkFalsy: true }).withMessage("Name is required"),
    check("districtId").exists({checkFalsy:true}).withMessage("District id is required"),
    check("slots").exists({checkFalsy:true}).withMessage('slots is required')
    .isArray().withMessage("Slots should be an array"),
    check("slots.*.name")  
    .exists({checkFalsy:true}),
    check("slots.*.time").exists({checkFalsy:true}),
    check('id').exists({checkFalsy:true})
    
]

