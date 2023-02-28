import React from "react";

const Nav=(props)=>{
  // const refreshing=()=>{
  //    let count=1;
  //     props.setRefresh(true);
    
     
    



  // }
return (<div>
  {/* Bootstap Nav start */}
  <nav className="navbar navbar-light bg-dark ">
  <div className="container-fluid">
    <a className="navbar-brand text-info" href="/">
      {/* <img src="../assets/logo.png" alt="" width="30" height="24" className="d-inline-block align-text-top"/> */}
      <img src="https://cdn-icons-png.flaticon.com/512/8751/8751199.png" alt="" width="50" height="50" className="d-inline-block align-text-top bg-dark"/>
      <h2 style={styles.forText}>Album</h2>
    </a>
  </div>
</nav>


  {/* Bootstap Nav ends */}
</div>
    
)


}

export default Nav;

const styles={
 circling:{
    borderRadius:"40%",
    
 }
 ,
 fullBody:{

    background:"blue"
 },
 forText:{
  
  display:"inline-flex",
  position:"absolute",
  marginLeft:"10px",
  top:"15px",left:"55px",
  fontFamily: "Brush Script MT",
  fontSize:"40px", background: "linear-gradient(to left,violet,indigo,blue,green,yellow,orange,red)",
  WebkitBackgroundClip: "text",
  color: "transparent"
 }

}
