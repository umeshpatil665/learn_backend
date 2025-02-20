class apiResponse {
    constructor(statesCode,data,message='Succesfully'){
this.data=data,
this.message=message,
this.statesCode=statesCode
this.success=statesCode<400
    }
}

export {apiResponse}