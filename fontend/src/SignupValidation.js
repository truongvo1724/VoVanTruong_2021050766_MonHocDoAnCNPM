function Validation(values){
    let error ={}

    const fullname_pattern = /^[a-zA-Z\s]+$/
    const username_pattern = /^[a-zA-Z0-9_]{5,}$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/
    const repassword_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if(values.fullname === ""){
        error.fullname = "Fullname should not be empty"
    }
    else if(!fullname_pattern.test(values.fullname)){
        error.fullname = "Fullname did not match the required format"
    }
    else{
        error.fullname = ""
    }

    if(values.username === ""){
        error.username = "Username should not be empty"
    }
    else if(!username_pattern.test(values.username)){
        error.username = "Username did not match the required format"
    }
    else{
        error.username = ""
    }

    if(values.password === ""){
        error.password = "Password should not be empty"
    }
    else if(!password_pattern.test(values.password)){
        error.password = "Password did not match the required format"
    }
    else{
        error.password = ""
    }

    if(values.repassword === ""){
        error.repassword = "Password should not be empty"
    }
    else if(!repassword_pattern.test(values.repassword)){
        error.repassword = "Password did not match the required format"
    }
    else{
        error.repassword = ""
    }
    
    if(values.email === ""){
        error.email = "Email should not be empty"
    }
    else if(!email_pattern.test(values.email)){
        error.email = "Email did not match the required format"
    }
    else{
        error.email = ""
    }
    return error;
}
export default Validation;
