import { useState } from "react";

export default function UserForm({addContact}) {

  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    password:"",
    city:"",
    pincode: "",
    isLoggedIn:false
  });

  const handleChange = (event) => {
    setContactInfo({ ...contactInfo, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addContact(contactInfo);
    setContactInfo({ name: "", email: "",password:"",city:"", pincode: "" });
  };
  const changestatus1=()=>{
    this.setContactInfo({isLoggedIn:true})
  };
   const changestatus2=()=>{
    this.setContactInfo({isLoggedIn:false})
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}> 
        <div>
          <h3>Input Form</h3>
        </div>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={contactInfo.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={contactInfo.email}
            onChange={handleChange}

          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={contactInfo.password}
            onChange={handleChange}

          />
        </div>
        <div>
          <input
            type="text"
            name="city"
            placeholder="Enter City"
            value={contactInfo.city}
            onChange={handleChange}

          />
        </div>
        <div>
          <input
            type="text"
            name="pincode"
            placeholder="Enter Pincode"
            value={contactInfo.pincode}
            onChange={handleChange}

          />
        </div>
        <div>
          {/* <button className="btn btn-outline-primary btn-sm mx-2 my-2" onClick={changestatus1}  >Login</button>
          <button className="btn btn-outline-primary btn-sm mx-2 my-2" onClick={changestatus2}>logout</button> */}
          {contactInfo.isLoggedIn?<div>
            <h1>username:{contactInfo.name}</h1>
            <h1>email:{contactInfo.email}</h1>
            <h1>password:{contactInfo.password}</h1>
            <h1>city:{contactInfo.city}</h1>
            <h1>pincode:{contactInfo.pincode}</h1>
            <button onClick={changestatus2}>logout</button>
        </div>:
        <div><h2>please login in</h2>
        <button onClick={changestatus1}>login</button>
        
        </div>
        }
        </div>
      </form>
     
    </div>
  );
}