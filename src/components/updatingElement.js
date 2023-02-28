import React from "react";
import { Link ,ro} from "react-router-dom";

const UpdateEle=(props)=>{

const all=(e)=>{
  // e.preventDefault();
 console.log(props.num);
//  console.log(props.users);

 let text=e.target.parentElement.firstElementChild.value;
 console.log(text);

 let id=props.num;
 console.log(id);
 let mig=props.users.map((e)=>{
  //  
  //  let id=5;
    
   if(id==e.id){
    e.title=text;
   }

   return e;

 }
 
 )



 props.setUsers(mig);


 console.log(props.users)}

// let word=props.setText;
// word(text);



return( <div className="updateCont">

<form action="/" className="form">
  <input type="text"  placeholder="Enter The Text" id={props.id} className="text" />
  <input type="submit" name="submit"  onClick={all}/>
</form>

</div>)







}

export default UpdateEle;