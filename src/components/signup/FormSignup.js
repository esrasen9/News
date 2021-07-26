import React from 'react';
import useForm from "./useForm";
import validateRules from "./validateRules";
import signupImage from "./img/pexels-photo-4185957.jpeg";

const FormSignup = ({submitForm}) => {

    const {userInfos,handleChange,handleSubmit,errors} = useForm(validateRules,submitForm);

    return (
        <div className="signup-form">
            <form className="form-container" onSubmit={handleSubmit}>
                <h1>
                    Join us to get the latest news!
                </h1>
                <div className="form-input-container">
                    <label htmlFor="username"
                           className="form-label">Username</label>
                    <input type="text"
                           name="username"
                           className="form-input"
                           id="username"
                           value={userInfos.username}
                           onChange={handleChange}
                           placeholder="Enter your username"
                    />
                    {errors.username && <p>{errors.username}</p>}
                </div>
                <div className="form-input-container">
                    <label htmlFor="email"
                           className="form-label">Email</label>
                    <input type="email"
                           className="form-input"
                           name="email"
                           id="email"
                           value={userInfos.email}
                           onChange={handleChange}
                           placeholder="Enter your email"
                    />
                    {errors.email && <p>{errors.email}</p>}
                </div>
                <div className="form-input-container">
                    <label htmlFor="password"
                           className="form-label">Password</label>
                    <input type="password"
                           name="password"
                           className="form-input"
                           id="password"
                           value={userInfos.password}
                           onChange={handleChange}
                           placeholder="Enter your password"
                    />
                    {errors.password && <p>{errors.password}</p>}
                </div>
                <div className="form-input-container">
                    <label htmlFor="password2"
                           className="form-label">Confirm Password</label>
                    <input type="password"
                           name="password2"
                           className="form-input"
                           id="password2"
                           value={userInfos.password2}
                           onChange={handleChange}
                           placeholder="Enter your password"
                    />
                    {errors.password2 && <p>{errors.password2}</p>}
                </div>
                <button className="form-input-btn" type="submit">
                    Sign up!
                </button>
                <span className="form-input-login">
                    Already have an account? Login <a href="#">here</a>
                </span>
            </form>
            <img src={signupImage}
                 alt="signup"
                 className="signup-image"
            />
        </div>
    );
}

export default FormSignup;