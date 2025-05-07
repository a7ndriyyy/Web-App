import React from "react";

const Register = () => {
    return (
        <div className="register-container">
            {/*LOGO On the left*/}
            <div className="register-left">

            </div>

            {/*Right section Register and username stuff*/}
            <div className="register-right">
                <input type="text" placeholder="Enter Username" className="username-input"/>
                <button className="register-button">Access</button>
            </div>
        </div>
    );
};

export default Register;