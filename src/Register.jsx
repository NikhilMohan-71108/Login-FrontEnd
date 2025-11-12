import { useState } from "react";

export default function Register(){
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const handleSubmit = async (e)=>{
         e.preventDefault();

         const newUser={name,email,password};
          try{
            const response = await axios.post(
              "http://localhost:8080/api/auth/register", newUser
             
            );
             console.log(response.data)
          } catch(error){
               console.error("Error registering user:", error);
            alert("Registration failed!");
          }
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input 
            value={name} 
            onChange={(e)=>setName(e.target.value)}></input>
            <label>Email:</label>
            <input 
            value={email} 
            onChange={(e)=>setEmail(e.target.value)}></input>
            <label>Password:</label>
            <input 
            value={password} 
            onChange={(e)=>setPassword(e.target.value)}></input>
            <button type="submit">Register</button>
            </form>
        </div>
    )
}