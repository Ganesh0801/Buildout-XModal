import React,{useState} from 'react';
import "./Form.css";
import Detail from "./Detail"

const Form = () => {
    const [innerForm,setInnerForm] = useState(false);
    
    const handleOpenInnerForm = ()=>{
        console.log("inner form ready to open");
        
        setInnerForm(!innerForm)
    }

  return (
    <div className='container'>
    <h1>
        User Details Model
    </h1>
    <button onClick={handleOpenInnerForm}>
        Open Form
    </button>
      {innerForm && 
      <Detail
      innerForm={innerForm}
      setInnerForm={setInnerForm}
      />}
    </div>
  )
}

export default Form