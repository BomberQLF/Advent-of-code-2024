import Eyeball from "./Eyeball";
import { useState } from "react";
import Lock from "./Lock";
import Input from "./Input";
import Title from "./Title";

const Password = () => {
    const [isPasswordShowing, setIsPasswordShowing] = useState(false);
    console.log(isPasswordShowing);
  
    const togglePassword = () => {
      setIsPasswordShowing(!isPasswordShowing);
    };
  
    return (
    <>
        <div
            className={`faux-box ${
            isPasswordShowing ? "show-password" : "hide-password"
            }`}
        >
            <Lock />
            {isPasswordShowing ? (
            <Input type="text" name="password" className="password" />
            ) : (
            <Input type="password" name="password" className="password" />
            )}
            <button onClick={togglePassword} className="toggle">
            <Eyeball />
            </button>
        </div>
        <Title className="titre"/>
    </>
    );
  };

export default Password;