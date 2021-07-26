const ValidateRules = (values) =>  {

    let errors = {};
    const {username,email,password,password2} = values;
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const passwordRegex =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

    if(!username.trim()){
        errors.username = "Username is required!"
    }

    if(!email){
        errors.email = "Email is required!"
    }else if(!emailRegex.test(email)){
        errors.email = "Email address is invalid!"
    }

    if(!password){
        errors.password = "Password is required!"
    }else if(!passwordRegex.test(password)){
        errors.password = "Password is invalid!"
    }

    if(!password2){
        errors.password2 = "Password is required!"
    }else if(password2 !== password){
        errors.password2 = "Passwords do not match!"
    }
    return errors;
}

export default ValidateRules;