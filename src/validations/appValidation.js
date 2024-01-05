import { regExp } from "./appRegExp"
//we need to validation:-
//1. Form validation  2. Filed Validation

export const handleFieldValidation=(eve,inputControls)=>{
    const{name,value}=eve.target
     const clonedControlObj= JSON.parse(JSON.stringify(inputControls))
    const inputControlObj=clonedControlObj.find((obj)=>{
        return obj.model===name
    })
    //get the data from inputControlObj
    inputControlObj.value=value //eve.target.value
    //to disappear the previous error message
    inputControlObj.errorMessage=""
    const criteria=inputControlObj.criteria
    for(let i=0;i<criteria.length;i++){
        const {pattern,errorMessage}=regExp[criteria[i]]
           if(!pattern.test(value)){
            inputControlObj.errorMessage=errorMessage
            break
           }
    }
    return clonedControlObj
}
export const handleFormValidation=()=>{

}