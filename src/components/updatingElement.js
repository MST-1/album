import React from "react";
import { Link ,ro} from "react-router-dom";
import Nav from "./navBar";
import "./for css/updateElement.css"

const UpdateEle=(props)=>{

const all=(e)=>{
  // e.preventDefault();
 console.log(props.num);
//  console.log(props.users);

//  let text=e.target.parentElement.parentElement.firstElementChild;
 let text=e.target.parentElement.parentElement.firstElementChild.nextSibling.value;

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


 console.log(props.users)
}

// let word=props.setText;
// word(text);



return( <>

<Nav/>
<div className="updateCont">
<div className="box">
<form action="#" className="box1">
  <div className="heading">
    <h1> Title of Album no :{props.num}  </h1>
  </div>
  <input type="text"  placeholder="Enter The Title" id={props.id} className="text" />
  
  <Link to="/"><input type="submit" name="submit"  onClick={all}/></Link>
</form>
</div>


</div></>)







}

export default UpdateEle;