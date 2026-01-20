import ApiError from "../Api-error"

const error_middleware=(err, req,res,next)=>{
    console.log(err);

    if(err instanceof ApiError){
        return res.status(err.statuscode).json(err.message);
    }


    res.status(500).json(
        new ApiError(
            "it is an error",
            500,
            "something went wrong there",
            


        

        ))

    
        
}