const { check } = require("express-validator");

module.exports.districtCreateRequest = [
    check("name").exists({ checkFalsy: true }).withMessage("Name is required")
]
module.exports.districtUpdateRequest = [
    check("name").exists({checkFalsy:true}).withMessage("name is required"),
    check("districtId").exists({checkFalsy:true}).withMessage("District id is required")
]
