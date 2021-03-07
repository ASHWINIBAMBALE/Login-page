import React, {useState} from 'react'

function LoForm({ Login, error }) {
    const[details, setDetails]=useState({name:"",email:"",password:"",number:""});
   
    const submitHandler= e =>{
        e.preventDefault();
        Login(details);

        
    }
    return (
       
             <form onSubmit={submitHandler}>
            <div className="form-inner">
                <h2>Login</h2>
                {(error !="") ?  (<div className="error">{error}</div>):""}
                <div className="form-group">
                
                    <label htmlFor="name"><h3>Name:</h3></label>
                    <input type="text" name="name" id="name" placeholder="Name" onChange={e => setDetails({...details, name:e.target.value})} value={details.name}/>

                </div>

                <div className="form-group">
                    <label htmlFor="email">
                        <h3>Email:</h3>

                    </label>
                    <input type="email" name="name" id="email" placeholder="Enter Email here "onChange={e => setDetails({...details, email:e.target.value})} value={details.email} />
                </div>
                <div className="form-group">
                    <label htmlFor="password"><h3>Password:</h3></label>
                    <input type="password" name="password" id="password" placeholder="Password"onChange={e => setDetails({...details, password:e.target.value})} value={details.password}/>

                </div>
                <div className="form-group">
                    <label htmlFor="number"><h3>Mobile Number:</h3></label>
                    <input type="number" name="number" id="number" placeholder="Number" onChange={e => setDetails({...details,number:e.target.value})} value={details.number}/>

                </div>
                <input type="submit" value="LOGIN"/>
            </div>
        </form>
       
    )
}

export default LoForm
