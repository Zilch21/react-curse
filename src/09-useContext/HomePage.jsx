import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const HomePage = () => {

    const {user, setUser} = useContext(UserContext);
    return (
      <>
      <h1>Home page <small>{user?.name} </small> </h1>
      <hr/>

      <button className="btn btn-primary"
      onClick={() => setUser ({id:123, name:'juanito', email: 'juanito@gmail'})}>send message</button>
      </>
    )
  }
  
  