import React, { useState } from "react";
import "./for css/element.css";
import UpdateEle from "./updatingElement";
import { Link,Outlet} from "react-router-dom";
import App from "../App";


const Elements = (props) => {
         
         let cId=props.cId;
         let setcId=props.setcId;
         
        
      
        // const [cUId,setcUId]=useState(1);

        // function update(e){
        //   console.log(e.target.parentElement);
        //   console.log(e.target.parentElement.id ,"i m Userid");
        //   console.log(e.target.parentElement.firstChild.id,"i m id");
        //    e.target.parentElement.style.backgroundImage="url(https://source.unsplash.com/random)"

        //    console.log(e.target.parentElement.parentElement
        //     );
        //     // e.target.parentElement.parentElement=(<UpdateEle/>);

        //   render(<UpdateEle users={props.users} cId={cId} setcId={setcId} />);
        // }

        const add=(e)=>{
          e.preventDefault();
          // console.log(e.target.parentElement.children[1].value);
          // console.log(e.target.parentElement.children[3].value);

          let d=e.target.parentElement.children[1].value;
          let uid=Number(d);
          let text=e.target.parentElement.children[3].value;

          let element={
            userId: uid,
             id: props.users.length+1,
             title: text
            
          }
            // console.log(element);

         let m=props.users.push(element);

        // filElem();
         alert('element has been added in Album :'+d );

         console.log(props.users);
        //  let n=props.users;
        //  

        }
        function submit(e){
        
        //  let value=props.text;
        //  console.log(value);
        //  console.log('im working')
         let id=e.target.parentElement.parentElement.id;
          // console.log(e.target.parentElement.id);
          console.log(id);
          props.setNum(id);
          
          
      
        }
        const del=(e)=>{

          let id=e.target.parentElement.id;
          console.log(id);
          
          let mig=props.users.filter((e)=>{
           
              
             if(id!=e.id){
              return e;
             }
          
           }
           
           )
           console.log(mig);
          
          
           props.setUsers(mig);



        }

        function noNegative(e){
        if(e.target.value<1){
         alert('you can not put value lower then 1');
         e.target.value=0;
        
        }

          

        }



        function forL(){
          let num=cId-1;
          if(cId>0){
            
            
            setcId(num);}
          else{
            setcId(1);
          }
          
          console.log(cId);
         };

          function forR (){
          let num=cId+1;
          setcId(num);
          console.log(cId);

          
         };

        //  function elem starts
      //    function elem(){

      //     let elements=props.users.map((curElement) => {
      //   return(<div className="col" id={curElement.id} style={styles.col}>
      //          {/* <Router>
      //           <Routes> */}
      //         <div className="content">{curElement.title}</div>
      //         <div className="update" onClick={forL}>L</div>
      //         <div className="delete"> U</div>
      //         <div className="delete">D</div>
      //         <div className="delete" onClick={forR}>R</div>
      //         {/* </Routes>
      //         </Router> */}
      //   </div>
      //   );
      // })

      // return elements;

      //    }

        //  function elem ends


        //  function filElem starts


        function filElem(){

        
         let ele=props.users.map((e)=>{
          
          
          if(e.userId===cId){
          //   console.log(e.userId,"i m userid");
          //  console.log(e.id,"i m eid");
           
           return(
           
           <div className="col" id={e.userId}  uid={e.id} style={styles.col}>
            <div className="Heading"><h1 className="head" style={styles.heading}>Album No :{e.userId} </h1></div>
           <div className="content" style={styles.luv} id={e.id}>
            <h4 style={styles.color}>Title:{e.id}</h4>{e.title}</div>
           {/* <div className="update" onClick={forL} >L</div> */}
           <div className="update" id={e.id}> 
            {/* <a href="/update" style={styles.foranchor}>U </a> */}
            <Link to="/update" onClick={submit}><img src="https://cdn-icons-png.flaticon.com/512/3838/3838833.png" alt="" style={styles.forimg}/></Link>
            </div>

           <div className="delete" onClick={del} id={e.id}><img src="https://cdn-icons-png.flaticon.com/512/7236/7236869.png" alt="" style={styles.forimg} /></div>
           {/* <div className="update" onClick={forR}>R</div> */}

              </div>
              
           )

          
          }

         })
         return ele;

        }
      //  function filElem ends
        
  return (
    
    <div className="container">
      {/* for Swiping Left */}
      <div className="Left" onClick={forL} ><img src="https://cdn-icons-png.flaticon.com/512/3683/3683447.png" alt="" style={styles.forimg}/></div>
          
     <div className="row row-cols-2">
     
    
     {filElem()}
     
   

      <div className="col">
             <div><h1> Add Album</h1></div>
        <form action="">
          <div style={styles.forAddAlbum}><label htmlFor="">User Id</label></div>
          <input type="number" name="forUserId" placeholder="Enter User Id" onChange={noNegative}/>
        <div style={styles.forAddAlbum}><label htmlFor="">Title</label></div>
          <input type="text" name="Title" placeholder="Enter the Title" />
            <input type="submit" onClick={add}/>
           

        </form>
        {/* <a href="./mainPage.js" target="_blank" rel="noopener noreferrer">+</a> */}
        
        
        </div>

      
  </div>


  {/* for Swiping Right */}
  
  <div className="Right" onClick={forR}><img src="https://cdn-icons-png.flaticon.com/512/3683/3683450.png" alt="" style={styles.forimg}/></div>
  
             
</div>


      


             
  );
};


// for styling elements

const styles={col:{
 
  // backgroundImage:"url(https://source.unsplash.com/random/200x200?sig=incrementingIdentifier)",
  backgroundSize:"cover",
  backgroundRepeat:"no-repeat",color:"#8363eb",
  fontFamily: "Lucida Handwriting",
  fontFamily: "Monaco"
 
  },
 luv:{
  background:"rgb(91, 84, 84)",
  borderRadius:"1rem",
  fontFamily: "Brush Script MT",
  fontSize:"22px"
 },
 heading:{
  backgroundImage:"url(https://source.unsplash.com/random/200x200?sig=incrementingIdentifier)",
  background:"rgb(91, 84, 84)",
  color:"black",borderRadius:"1rem",fontFamily: "Copperplate, Papyrus, fantasy"
 },
 color:{
  color:"black",
  fontFamily: "Brush Script MT"
 },
 foranchor:{
  textDecoration: "none",

 },
 forimg:{
  height: "50px", width:" 50px"
 },
 forAddAlbum:{
 borderRadius:"5px",padding:"2px",margin:"5px",
//  color:"blue"
 fontSize:"20px",
 background: "linear-gradient(to left,violet,indigo,blue,green,yellow,orange,red)",
 WebkitBackgroundClip: "text",
 color: "transparent"
// color: "blue"
 }
}

export default Elements;
