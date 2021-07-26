import React,{useState} from 'react';
import FormSignup from "./FormSignup";
import FormSuccess from "./FormSuccess";

const Form = () => {
    const [isSubmitted,setIsSubmitted] = useState(false);

    const submitForm = () => {
        setIsSubmitted(true);
    }
    return (
        <div className="form">
            {!isSubmitted ?
                <FormSignup submitForm={submitForm}/>
                : <FormSuccess /> }
        </div>
    );
}

export default Form;