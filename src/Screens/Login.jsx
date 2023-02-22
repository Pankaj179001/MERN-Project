import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'


export default function Login() {
  const [data,setData]=useState({
    email:"",password:""
  })
  const navigate=useNavigate()

 const HandleSubmit=async (e)=>{
e.preventDefault()
const loginResponse=await fetch("http://127.0.0.1:1200/api/login",
{
  method:"Post",
  headers:{
  "Content-Type":"application/json"
  },
  body: JSON.stringify({email:data.email,password:data.password})
  
});
const result=await loginResponse.json()

console.log(result.Token)
if(result.login==="success"){
  const response=await fetch("http://127.0.0.1:1200/api/me",{headers:{"Authorization" : `Bearer ${result.Token}`}})
 const userData=await response.json()
  localStorage.setItem("user",JSON.stringify( userData.data))
  console.log(await userData.data)
return navigate("/")
}
else{
return {login:"failure"}
}
 }
 const onChange=(e)=>{
setData({...data,[e.target.name]:e.target.value})
 }

  return (
    <div className='container fluid'>
      <div className='row-3'>  
<form onSubmit={HandleSubmit}>
  <div className="mb-3 ">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' onChange={onChange}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" name='password' onChange={onChange}/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary" >Submit</button>
</form>
</div>

</div>
  )
}
