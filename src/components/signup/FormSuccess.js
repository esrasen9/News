import React from "react";
import {NavLink} from "react-router-dom";

const FormSuccess = () => {
    return (
        <div className="form-success">
            <h1>We have received your request!</h1>
            <button className="get-news-btn">
                <NavLink to="/general">Get the latest news!</NavLink>
            </button>
        </div>
    );
}

export default FormSuccess;