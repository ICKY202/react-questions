import React from "react";


const PasswordStrength = ({passwordLength}) => {
    const getPasswordStrength = () => {
        if(passwordLength < 1) {
            return ""
        }else if(passwordLength < 4) {
            return "very weak";
        }else if(passwordLength < 8) {
            return  "Poor";
        }else if(passwordLength < 12) {
            return "Medium";
        }else if(passwordLength < 16) {
            return "Strong";
        }else {
            return "Very Strong"
        }
    }
    const passwordStr = getPasswordStrength();

    if(!passwordStr) return (<React.Fragment></React.Fragment>)
    return (<div style={{display: "flex", justifyContent: "space-between"}}>
        <label>Strength: </label><span>{passwordStr}</span>
    </div>)

}

export default PasswordStrength;