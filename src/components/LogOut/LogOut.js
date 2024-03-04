import React from 'react'
import { getAuth, signOut } from "firebase/auth";

function LogOut() {
    const auth = getAuth();
    const handle = () =>{
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
    }
    return(
        <>
        <button type="button" className="btn btn-outline-info" onClick={handle}>Log Out</button> 
        </>
    )
}

export default LogOut