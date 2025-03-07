exports.ServerError = (res,error)=>{
    res.status(500).send({message: error.message})
}