import {useState,useEffect} from 'react';

const UseForm = (validateInfo,submitForm) =>  {
    const [userInfos, setUserInfos] = useState({
        username: "",
        email: "",
        password:"",
        password2: ""
    })

    const [errors,setErrors] = useState([]);
    const [isSubmitting,setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const {name,value} = e.target;
        setUserInfos({
           ...userInfos,
           [name] : value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validateInfo(userInfos));
        setIsSubmitting(true);
    }

    useEffect(()=>{
        if(Object.keys(errors).length === 0 && isSubmitting){
            submitForm();
        }
    });

    return {handleChange,handleSubmit,errors,userInfos};
}

export default UseForm;