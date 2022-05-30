
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RegisterPageOne = () => {
    const initialValues ={
        username: "",
        email: ""

    };
    const [datas,setDatas]=useState(initialValues);
    const [errors,setErrors]=useState({});
// console.log(datas.username)
const handelChange= (e) =>{
     const {name, value}=e.target;
     setDatas({...datas, [name]: value});
    console.log(datas);
};
const handelSubmit=(e)=>{
    e.preventDefault();
};

const validater=(values)=>{
const errors={};
if(!values){
    errors.username="username is required";
}
if(!values){
    errors.email="email is required";
}
return errors;

};
  return (
    <>

<div>
    {/* <h1>{JSON.stringify(datas, undefined,2)}</h1> */}
    <form onSubmit={handelSubmit}>
username:
        <input type="text" name="username" placeholder="username" value={datas.username} 
         onChange={handelChange}
        />
    email:
        <input type="email" name="email" placeholder="email" value={datas.email}  onChange={handelChange}
         />
<button>submit</button>
        <button><Link to="/register/two"/>Next</button>
        </form>
    </div>
    </>
  )
}

export default RegisterPageOne