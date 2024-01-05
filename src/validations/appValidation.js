import { regExp } from "./appRegExp"
//we need to validation:-
//1. Form validation  2. Filed Validation

const validateField=(value,criteria,inputControlObj)=>{
    for(let i=0;i<criteria.length;i++){
        const {pattern,errorMessage}=regExp[criteria[i]]
           if(!pattern.test(value)){
            inputControlObj.errorMessage=errorMessage
            break
           }
    }
}
export const handleFieldValidation=(eve,inputControls)=>{
    const{name,value}=eve.target
     const clonedInputControls= JSON.parse(JSON.stringify(inputControls))
    const inputControlObj=clonedInputControls.find((obj)=>{
        return obj.model===name
    })
    //get the data from inputControlObj
    inputControlObj.value=value //eve.target.value
    //to disappear the previous error message
    inputControlObj.errorMessage=""
    const criteria=inputControlObj.criteria
    validateField(value,criteria,inputControlObj)
    return clonedInputControls
}
export const handleFormValidation=(inputControls)=>{
    const clonedInputControls= JSON.parse(JSON.stringify(inputControls))
    //we have send the request with some data
    const dataObj={}
    clonedInputControls.forEach((inputControlObj)=>{
        const{value,criteria,model}=inputControlObj
        dataObj[model]=value
       validateField(value,criteria,inputControlObj)
    })
   const isFormInvalid=clonedInputControls.some((inputControlObj)=>{
        return inputControlObj?.errorMessage?.length>0
    })
    return [isFormInvalid,clonedInputControls,dataObj]
}