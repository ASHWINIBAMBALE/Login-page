import React, {useState} from 'react';
import LoForm  from './components/LoForm.js';
function App(){
  const adminUser={
    name:"rohit",
    email:"rroo@gmail.com",
    password:"123456789",
    number:"9876543210"
  };
  
  const[user, setUser]=useState({name:"",email:"",number:""});
  const [error, setError]=useState("");
  const Login=details =>{
    console.log(details);
    if (details.email == adminUser.email && details.password == adminUser.password)
    if(details.name == adminUser.name && details.number == adminUser.number) {
      console.log("logged in ");
     setUser({
         name:details.name,
         email:details.email,
         number:details.number

      });
  }
  else{  console.log("Details do not match");
  setError("Details do not match");

  }
      else {
      console.log("Details do not match");
      setError("Details do not match");
  }
  };
  const Logout = () =>{
    setUser({name:"",email:""});
  }
  return (
    <div className="APP">
      {(user.email !="") ? (
        <div className="welcome">
          <h2>Welcome, <span>{user.name}</span></h2>
          <button onClick={Logout}>Logout</button>

        </div>
      )
    :(
      <LoForm Login={Login} error={error}/>
      )
      
    
    }
    </div>
  )
}
export default App