const serverErrorHandler = ((err, req, res, next)=>{
    console.log(err)
    let response = {message:"Internal server error"};
    if(process.env.MODE == "dev"){
        response.errors = err;
    }
    return res.status(500).json(response)
})

module.exports.serverErrorHandler = serverErrorHandler;