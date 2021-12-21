import React , {useState} from 'react';
import Styles from './form.module.css'

const Form1 = () => {

  const [user, setuser] = useState({
    username:"",
    email:'',
    phone:"",
    password:"",
    Dob:""
  });
 
  const handleInput =(e)=>{
    const name= e.target.name;
    const value=e.target.value;
    console.log(name, value);
    

    setuser({...user, [name]:value}); // geting data from user as a pair of name and value 
     
  }
  const [records , setRecords] =useState([]);
  
  const handleSubmit=(e)=>{
     e.preventDefault();
   
    const newRecords={...user, id:new Date().getTime().toString() }
    console.log(records) ;
    setRecords([...records,newRecords])
    console.log(records) ;
  
  }
    return (
        <div>
            <form    onChange={handleSubmit}   >
               <div className={Styles.bord} >
                  <label>Fullname:</label>
                   <input  type="text"   value={user.username}
                 onChange={handleInput} name="username" id="username" placeholder='name.....'/>
               </div>   <br/>
             
               <div>
                  <label>email:</label>
                  <input  type="email"   value={user.email}
                    onChange={handleInput} name="email" id="email" placeholder='mail id..'/>
               </div> <br/>
              
               <div>
                  <label>phone:</label>
                  <input  type="phone"   value={user.phone}
                     onChange={handleInput} name="phone" id="phone" placeholder='mobile no...'/>
               </div> <br/>
              
               <div>
                 <label htmlFor='password'>password:</label>
                 <input  type="password"   value={user.password}
                      onChange={handleInput} name="password" id="password" placeholder='write your...'/>
               </div> <br/>
               
               <div>
                 <label htmlFor='dob'> Dob:</label>
                 <input  type="date"   value={user.Dob}
                      onChange={handleInput} name="Dob" id="Dob" placeholder='Dob..'/>
               </div> <br/>
              
               <button type="submit" >Submit</button>
            </form>
            <div>
              {
                  records.map((curElem) => {
                       return(
                         <div>
                         <p>{curElem.username}</p>
                         <p>{curElem.phone}</p>
                         <p>{curElem.email}</p>
                         <p>{curElem.password}</p>
                         <p>{curElem.Dob}</p>
                           </div>
                          
                             );
              })
            }
            </div>
         
        </div>
    );
}

export default Form1;
