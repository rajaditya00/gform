import './App.css';

import {useState} from 'react';

function App() {

  const[formData, setFormData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    phone:"",
    country:"India",
    streetAdress:"",
    city:"",
    state:"",
    postalCode :"",
    comments:false,
    candidates:false,
    offers:false,
    pushNotifications:"",
    sameEmail:""
    
  })

   

  function changeHandler(event){
    const{value, name,type,checked} = event.target
    setFormData((prevData)=>({...prevData, [name] : type === "checkbox" ? checked :value}));
  }

  function submitHandler(event){
  event.preventDefault();

  console.log("finally printing the value of form data");
  console.log(formData);

  }
 
  return (
   <div className="flex flex-col items-center mt-3 ">
    <form onSubmit={submitHandler}>
    <label htmlFor="firstName">First Name</label> 
<br></br>
<input
    type="text"
    placeholder='first name'
    onChange={changeHandler}
    id='firstName'
    name='firstName'
    value={formData.firstName}
    className="outline"
  />
<br/> 
     
<label htmlFor="lastName">Last Name</label> 
 <br/>  
  <input
    type="text"
    placeholder='last name'
    onChange={changeHandler}
    id='lastName'
    name='lastName'
    value={formData.lastName}
    className="outline"
  />

<br/>
<label htmlFor="email">email</label> 
<br/>
  <input
    type="email"
    placeholder='example@gmail.com'
    onChange={changeHandler}
    id='email'
    name='email'
    value={formData.email}
    className="outline"
  />

<br/>
<label htmlFor='phone'>Phone</label> 
<br/>
  <input
    type="tel"
    placeholder='phone'
    onChange={changeHandler}
    id='phone'
    name='phone'
    value={formData.phone}
    className="outline"
  />

<br/>
<label htmlFor='phone'>country</label> 
<br/>
  <select
    onChange={changeHandler}
    id='country'
    name='country'
    value={formData.country}
    className="outline"

    >
<option value="India">India</option>
<option value="Nepal">Nepal</option>
<option value="Austrelia">Austrelia</option>
<option value="America">America</option>
<option value="Russia">Russia</option>
    </select>
     
  

    <br/>
<label htmlFor='streetAdress'>Street Adress</label> 
<br/>
  <textarea
    
    placeholder='street adress'
    onChange={changeHandler}
    id='streetAdress'
    name='streetAdress'
    value={formData.streetAdress}
    className="outline"
  />

<br/>
<label htmlFor='city'>city</label> 
<br/>
  <input
    type="text"
    placeholder='city'
    onChange={changeHandler}
    id='city'
    name='city'
    value={formData.city}
    className="outline"
  />


<br/>
<label htmlFor='state'>state</label> 
<br/>
  <input
    type="text"
    placeholder='state'
    onChange={changeHandler}
    id='state'
    name='state'
    value={formData.state}
    className="outline"
  />

<br/>
<label htmlFor='postalCode'>ZIP / postalCode</label> 
<br/>
  <input
    type="text"
    placeholder='postalCode'
    onChange={changeHandler}
    id='postalCode'
    name='postalCode'
    value={formData.postalCode}
    className="outline"
  />

<br/>
<label htmlFor='city'>city</label> 
<br/>
  <input
    type="text"
    placeholder='city'
    onChange={changeHandler}
    id='city'
    name='city'
    value={formData.city}
    className="outline"
  />
<br/><br/>
<fieldset>
  <legend>By Email</legend>

<div className='flex flex-row'>
<input
  id="comments"
  name="comments"
  type="checkbox"
  onChange={changeHandler}
  value={formData.comments}
 
  /> 
  <div>
  <lable htmlFor='comments'>Comments</lable>
  <p>Get notified when someones posts a comment on a posting</p>
  </div>

</div>
 
<div className='flex flex-row' >
<input
  id="candidates"
  name="candidates"
  type="checkbox"
  onChange={changeHandler}
  value={formData.candidates}
 
  /> 
  <div>
  <lable htmlFor='candidates'>Candidates</lable>
  <p>Get notified when a candidate applies for a job</p>
  </div>

</div>
  

<div className='flex flex-row'>
<input
  id="offers"
  name="offers"
  type="checkbox"
  onChange={changeHandler}
  value={formData.offers}
 
  /> 
  <div>
  <lable htmlFor='offers'>Offers</lable>
  <p>Get notified when a candidate accept or reject an offer</p>
  </div>
</div>
 
   
</fieldset>
<br/><br/>
<fieldset>
  <legend>Push Notifications</legend>
  <p>There are delivered via SMS to your mobile phone.</p>


  <input
  type="radio"
  id='pushEverything'
  name='pushNotifications'
  value="Everything"
  onChange={changeHandler}

  />

  <label htmlFor='pushEverything'>Everything</label>
  <br/>
  <input
  type="radio"
  id='pushEmail'
  name='pushNotifications'
  value="Same as email"
  onChange={changeHandler}

  />

  <label htmlFor='pushEmail'> Same as Email</label>
<br/>
  <input
  type="radio"
  id='pushNothings'
  name='pushNotifications'
  value="No Push Notification"
  onChange={changeHandler}

  />

  <label htmlFor='pushNothings'>No Push Notifications</label>
</fieldset>

<button 
className='bg-blue-500 text-white font-bold rounded py-2 px-4'
>Save</button>
  

      
    </form>
   </div>
  );
}

export default App;
