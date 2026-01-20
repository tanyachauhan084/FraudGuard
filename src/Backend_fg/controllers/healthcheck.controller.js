import ApiResponse from "../Api-response.js";
import async_handler from "../utilities/async_handler.js";

const healthcheck= async_handler(async(req,res)=>{


    res.status(200).json(
    new ApiResponse(
            "it is a healthcheck, think of i like a doc-watcher",
            200,
            "Everything seems great here",

    )
)
})

export default healthcheck;