
import { useState } from "react";

const usePasswordGenerator = () => {
    const [password, setPassword ]= useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const generatePassword = (checkedBoxes, charLength) => {
        let charset = "", generatedPassword="";
        const filterCheckedBox = checkedBoxes.filter((checkbox) => checkbox.state === true);
        if(filterCheckedBox.length === 0) {
            setErrorMessage("Select atleast one option!");
            setPassword("");
            return;
        }
        console.log("after check");
        filterCheckedBox.forEach((checkbox) => {
            switch(checkbox.title) {
                case "Include Uppercase Letters":
                    charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                    break;
                case "Include Lowercase Letters":
                    charset += "abcdefghijklmnopqrstuvwyz";
                    break;
                case "Include Numbers":
                    charset += "1234567890";
                    break;
                case "Include Symbols":
                    charset += "!@#$%^&*()";
                    break;
                default:
                    break;
            }
        });

        console.log(charset);

        for(let i=0; i<charLength; i++) {
            const index = Math.floor(Math.random() * charset.length);
            console.log(index);
            generatedPassword += charset[index]
        }
        console.log(generatedPassword);
        setPassword(generatedPassword);

    }

    return {password, generatePassword, errorMessage, setErrorMessage};
}

export default usePasswordGenerator;