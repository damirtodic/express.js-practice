import './App.css';
import {useState,useEffect} from "react";
import axios from "axios";

function App() {
  const [users,setUsers]=useState();
  useEffect(()=>{
    axios.get("http://localhost:3000/users").then((res)=>{
      console.log(res.data);
      setUsers(res.data);
    }).catch(err=>{
      console.log(err);
    })
  },[]);

  function logInHandler(e){
      e.preventDefault();
      const data={
        username: e.target.elements.username.value,
        password: e.target.elements.password.value
      }
      axios.post("http://localhost:3000/userLog",data).then((res)=>{
        console.log(res.data[0].id);
        localStorage.setItem("id",res.data[0].id);
      }
        
      ).catch(err=>{
        console.log(err);
      })
  }
  
  function updateHandler(e){
      e.preventDefault();
      const id=localStorage.getItem("id");
      const things={
        username: e.target.elements.username.value,
        password: e.target.elements.password.value,
        id: id
      }
      axios.put("http://localhost:3000/updateUser",things).then((res)=>{
        console.log(res);
      }

      ).catch(err=>{
        console.log(err);
      })
  }
  function registerHandler(e){
    e.preventDefault();
    const data={
      username: e.target.elements.username.value,
      password: e.target.elements.password.value
    }
    axios.post("http://localhost:3000/registerUser",data).then((res)=>{
      console.log("user registered successfuly");
    }
    ).catch(err=>{
      console.log(err);
    })
   
  }
  function deleteHandler(){
    const id=localStorage.getItem("id");
    const data={id:id}
    axios.delete("http://localhost:3000/deleteUser",{ data: { id } }).then(res=>{
      console.log("deleted user successfuly")
    }
    ).catch(err=>{
      console.log(err);
    })
  }

  return (
   <>
   <div>
   <form onSubmit={registerHandler} method='POST'>
      <label>Username</label>
      <input type='text' name='username'></input>
      <label>Password</label>
      <input type='password' name='password'></input>
      <button type='submit'>Register</button>
    </form>
   </div>
   <div>
    <form onSubmit={logInHandler} method='POST'>
      <label>Username</label>
      <input type='text' name='username'></input>
      <label>Password</label>
      <input type='password' name='password'></input>
      <button type='submit'>Log In</button>
    </form>
    </div>
    <div>
      <form onSubmit={updateHandler}>
      <label>Username</label>
      <input type='text' name='username'></input>
      <label>Password</label>
      <input type='password' name='password'></input>
      <button type='submit'>Update User</button>
      </form>
    </div>
    <div><button onClick={deleteHandler}>DELETE ACCOUNT</button></div>
    </>
  );
}

export default App;
