import React from "react";
import "./Register.css"; // Import the styles

const Register = () => {
    return (
        <div className="register-container">
            {/* Left Section - Logo */}
            <div className="register-left">
                <img src="" alt="Logo" />
            </div>

            {/* Right Section - Register and Username */}
            <div className="register-right">
                <input type="text" placeholder="Enter Username" className="username-input" />
                <button className="register-button">Access</button>
            </div>
        </div>
    );
};

export default Register;
