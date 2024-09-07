import { useState } from "react";
export default function Form() {

    let  [formData, setFormData] = useState({
        fullName: "",
        username: "",
        password: "",
    })
//   let [fullName, setFullName] = useState("");
//  let [username, setUsername] =useState("");

//   let handleNameChange = (event) => {
//     console.log(event.target.value);
//     setFullName(event.target.value);
//   };

//   let handleUsername = (event) => {
//     // console.log(event.target.value);
//     setUsername(event.target.value);
//   };


let handleInputChange= () =>{
    // let fieldName= event.target.name;
    // let newValue= event.target.value;
    // console.log(newValue);

    setFormData( (currData) => {
        // currData[fieldName]= newValue;
        return {...currData, [event.target.name] : event.target.value}
    }

    )
}

let handleSubmit= (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData({
        fullName: "",
        username: "",
        password: "",

    })

    // after submission every thing should be cleared
}

  return (
    <form action="" onSubmit={handleSubmit}>
      <label htmlFor="fullname">Full Name</label>
      <input
        type="text"
        name="fullName"
        id="fullname"
        placeholder="Enter full name"
        value={formData.fullName}
        onChange={handleInputChange}
     
      />

{/* name must be similar to state variable */}
<br />
<br />
      <label htmlFor="username">User Name</label>
      <input
        type="text"
        name="username"
        id="username"
        placeholder="Enter user name"
        value={formData.username}
        onChange={handleInputChange}
       
      />
   

  <br />
  <br />
     <label htmlFor="password">Password</label>
     <input type="password" name="password" id="password" 
     value={formData.password}
     placeholder="Enter password"  onChange={handleInputChange}/>
      <button>Submit</button>
    </form>
  );
}
