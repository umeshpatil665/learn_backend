class apiResponse {
    constructor(data,message='Succesfully',statesCode){
this.data=data,
this.message=message,
this.statesCode=statesCode
this.success=statesCode<400
    }
}

export {apiResponse}