class ApiResponse{
    constructor(
        data,
        statuscode,
        message,
    ){
        this.data=data;
        this.statuscode= statuscode;
        this.message=  message;
    }
}

export default ApiResponse;