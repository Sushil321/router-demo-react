import {useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {
    const login=()=>{
        localStorage.setItem("login",true);
        navigate("/")
    }
    const navigate = useNavigate();
    useEffect(()=>{
        const login = localStorage.getItem("login");    
        if(login){
            navigate("/")

        }

    });
  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",fontSize:"20px"}}>
        <h1>Login </h1>
        <input type='text' /><br/>
        <input type='text' /><br/>
        <button onClick={login}>Login</button>
    </div>
  )
}

export default Login