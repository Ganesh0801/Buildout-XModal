import React,{useState} from 'react'
import "./Detail.css";

const Detail = ({innerForm,setInnerForm}) => {
  const userData = {
    username:"",
    email:"",
    phone:"",
    DOB:""
  }
 
  const[data,setData] = useState(userData)

  const handleChange = (e)=>{
   setData({...data,
    [e.target.name] : e.target.value})
  }
  
  const isPerfect = (data)=>{
      const{email,phone,DOB}=data;
      if(email&&phone&&DOB){
        alert("Form Submitted Successfully");
        setInnerForm(false)
        console.log(data)
      }
      else{
        console.log("false")
        return false
      }
  }
  
  const handleCheck = (e)=>{

    if(data.email !== ""){
      let email = data.email;
      if(!email.includes("@")){
       alert(`Please include '@' in the email address.'${email}' is missing an '@`)
      }
    
       if(email.indexOf("@")){
         if(email.indexOf("@")<=0){
           alert(`Please include '@' in the email address. '${email}' is missing an '@`)
           return false
         }
        }
      

      if(data.phone !== ""){
        let phone = parseInt(data.phone);
        //console.log(`phone number is ${phone} and it's type is ${typeof(phone)}`)
        if(phone === isNaN || phone.toString().length < 10 || phone.toString().length > 10){
          alert("Invaild phone number. Please enter a 10-digit phone number")
          return false
        }
      }

      if(data.DOB !==""){
        let currDate = new Date()
             let selectedDob = new Date(data.DOB)
             if (selectedDob > currDate){
              alert("Invalid date of birth. Date of birth cannot be in the future.")
              return false
             }
             
      }
         isPerfect(data);
    }
     
  }

  return (
   <div className="modal">
    <div className="modal-content">
        <form className="form-content" onSubmit={(e)=>{e.preventDefault()}}>
                <h2>Fill Details</h2>
                
                <div>
                    <label htmlFor='name'>Username:</label>
                    <input id="name" 
                    type="text" 
                    name='username'
                    value={data.username} 
                    onChange={handleChange}
                    required/>
                </div>
                <div>
                    <label htmlFor='email'>Email Address:</label>
                    <input id='email'
                     type='email' 
                     name='email'
                     value={data.email}
                     onChange={handleChange} 
                     required
                    />
                </div>
                <div>
                    <label htmlFor='phone'>Phone Number:</label>
                    <input id='phone' 
                    type="tel" 
                    name='phone'
                    value={data.phone} 
                    onChange={handleChange}
                    required/>
                </div>
                <div>
                    <label htmlFor='DOB'>Date of Birth:</label>
                    <input id='DOB' 
                    type="date" 
                    name='DOB'
                    value={data.dob} 
                    onChange={handleChange}
                    required
                    />
                </div>
                <button onClick={handleCheck}>Submit</button>
            
        </form>
    </div>
   </div>
  )
}

export default Detail