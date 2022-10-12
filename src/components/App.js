import React, {Component, useState} from "react";
import '../styles/App.css';

function App(){
  const [getForm,setForm] = useState({
    name:'',
    email:'',
    gender:'male',
    phoneNumber:'',
    password:''
});
const onChangeHandler=(event)=>{
    setForm({
      ...getForm,
      [event.target.name]:event.target.value
    })
}
const onSubmitHandler=(event)=>{
   event.preventDefault();
   console.log(getForm);
}
return (<div>
    <form>
      <div>
        Name:<input type="text" onChange={onChangeHandler} data-testid='name' name="name"/>
      </div>
      <div>
      Email address :<input type="email" onChange={onChangeHandler} data-testid='email' name="email"/>
      </div>
      <div>
        Gender:<select data-testid='gender' onChange={onChangeHandler} name="gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Others</option>
        </select>
      </div>
      <div>
        Phone:<input type="number" onChange={onChangeHandler} data-testid = 'phoneNumber' name="phoneNumber"/>
      </div>
      <div>
        Password:<input type="password" onChange={onChangeHandler} data-testid='password' name="password"/>
      </div>
      <div>
        <button data-testid='submit' onClick={onSubmitHandler}>Submit</button>
      </div>
    </form>
</div>)
}
export default App;
