import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {
    
    
    const {hola, user} = useContext(UserContext);

    return (
      <>
      <h1>Login App</h1>

        <p>Hola {user.name} </p>
      <hr/>
      </>
    )
  }
  
  