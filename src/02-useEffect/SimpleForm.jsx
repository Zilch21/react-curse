import { useEffect, useState } from "react";
import { Message } from "./Message";


export const SimpleForm = () => {
    const [formState, setformState] = useState({
        username: 'strider',
        email: 'juanito@gmail.com'
    })
    const { username, email } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setformState({
            ...formState,
            [name]: value
        });
    }

    useEffect(() => {
        //console.log("useEffect called!!");
     },[]) ;  

     useEffect(() => {
        //console.log("formState called!!");
     },[formState]) ; 

     useEffect(() => {
       // console.log("username called!!");
     },[username]) ;  

     useEffect(() => {
       // console.log("email called!!");
     },[email]) ;  

    

    return (
        <>
            <h1> Formulario simple</h1>
            <hr />
            <input
                type="text"
                className="form-control"
                placeholder="Usename"
                name="username"
                value={username}
                onChange={onInputChange} />


            <input
                type="email"
                className="form-control mt-2"
                placeholder="robert@gmail.com"
                name="email"
                value={email}
                onChange={onInputChange} />
            {
                (username==='strider2') && <Message/>
            }


            

        </>
    )
}


