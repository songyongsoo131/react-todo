import React from "react";
import "./Form.css";

const Form = ({ value, onChange, onCreate, onKeyPress,color }) => {
    return (
        <div className="form">
            <input
                value={value}
                onChange={onChange}
                onKeyPress={onKeyPress}
                style={{color}}
            ></input>
            <div className="create-button" onClick={onCreate}>
                Add
            </div>
        </div>
    );
};

export default Form;
