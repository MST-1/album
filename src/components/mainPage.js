import React from "react";
import Nav from "./navBar";
import Elements from "./elements";

const UserIF=(props)=>{
  

    return(
   

<div>
    {/* for nav bar */}
    <Nav refresh={props.refresh} setRefresh={props.setRefresh}/>
    <Elements  users={props.users} setUsers={props.setUsers} cId={props.cId} setcId={props.setcId} text={props.text} setText={props.setText}  num={props.num} setNum={props.setNum}/>


</div>)

}

export default UserIF;