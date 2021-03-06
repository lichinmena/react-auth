import React, { useState, SyntheticEvent } from 'react';
import { Redirect } from 'react-router';

const Register = () => {
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [redirect, setRedirect] = useState(false);

const submit = async (e: SyntheticEvent) => {
    e.preventDefault();
    console.log({
        name,
        email,
        password
    })
    //const response = await fetch("http://localhost:8000/api/register", {
    await fetch("http://localhost:8000/api/register", {    
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body:JSON.stringify({
            name,
            email,
            password
        })
    });
   // const content = await response.json(); 
   // console.log(content)
   setRedirect(true);
}

    if(redirect) {
        return <Redirect to="/login"/>;
    }
    

    return (
        <form onSubmit={submit}>

        <h1 className="h3 mb-3 fw-normal">Please register</h1>

        <input className="form-control"  
               placeholder="Name" 
               required
               onChange={e => setName(e.target.value)}
                />

        <input type="email" 
               className="form-control"  
               placeholder="Email address"
               onChange={e => setEmail(e.target.value)}/>

        <input type="password" 
               className="form-control"  
               placeholder="Password"
               onChange={e => setPassword(e.target.value)}/>

        <button className="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
      
      </form>
    );
};

export default Register;