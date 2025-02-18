const asyncHandler=(fn)=>async(req,res,body)=>{
try {
    await fn(req,res,body)
} catch (err) {
    res.status(err.code||500).json({
        sucess:true,
         message:err.message
    })
}
}

export {asyncHandler}