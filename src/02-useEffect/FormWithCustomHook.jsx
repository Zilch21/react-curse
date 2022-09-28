import { useEffect, useState } from "react";
import { useForm } from "../hooks/useForm";
import { Message } from "./Message";


export const FomrWithCustomHook = () => {
    const {username, email, password, formState, onInputChange,  onResetForm} = useForm({
        username: '',
        email: '',
        password:''
    })
    
   // const {username, email, password}  = formState;

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
            <h1> Formulario con custom hook simple</h1>
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

            <input
                type="password"
                className="form-control mt-2"
                placeholder="password"
                name="password"
                value={password}
                onChange={onInputChange} />

            <button className="btn btn-primary mt-2" onClick={onResetForm}>Borrar</button>
            
            {
                (username==='strider2') && <Message/>
            }


            

        </>
    )
}


