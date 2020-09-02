
// const errorHandle = (err, req, res, next)=>{
//     console.log(err);
//     res.status(401)
//     res.send(err);
// }

// const tryCatch = (f) => async(req,res,next)=>{
//     try {
//         await f(req,res)
//     }   catch(error){
//         next(error)
//     }
    
// }

// const errorHandle = (err, req, res, netx)=>{
//     if(err.code < 500 && err.code < 400){
//         res.status(err.code)

//     }
// }
// module.exports = {
//     errorHandle,
//     tryCatch   
// }