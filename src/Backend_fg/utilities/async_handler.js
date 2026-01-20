
const async_handler= (handlerRequest)=>{
return(req,res,next)=>{

    Promise
    .resolve(handlerRequest(req, res,next))
    .catch((err)=>next(err));
}

}

export default async_handler;