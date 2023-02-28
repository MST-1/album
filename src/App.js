import React, { useEffect, useState }  from 'react';
import { BrowserRouter,Routes , Route} from 'react-router-dom';
import './App.css';
// import UserIF from './components/mainPage';
import {UserIF,Nav,Elements,UpdateEle} from "./components/index";


const getLocalData=()=>{
 let list=localStorage.getItem('lists');
//  console.log(list);

 if(list){
  return (JSON.parse(localStorage.getItem('lists')));
 }
 else{
  return [];
 }



}
 
function App() {


  const [users,setUsers]=useState(getLocalData());
  const [cId,setcId]=useState(1);
  const[text,setText]=useState('tghjhggjh');
  const[num,setNum]=useState(0);
  const[refresh,setRefresh]=useState(false);



  const getUser= async()=>{
      const response= await fetch(`https://jsonplaceholder.typicode.com/albums`);

      setUsers(await response.json()); 
      

      // const data=await response.json();
      // console.log(data);

  }
 
 
 
 useEffect(()=>{
 
  getUser();
  alert('refresh the page to change the wallpaper');
  
 },[]);

 useEffect(()=>{

  localStorage.setItem('lists',JSON.stringify(users));
 },[users]);
  return (
    
    <div className="App">
      <BrowserRouter>
            <Routes>
             
              <Route path='/' exact={true} element={<UserIF users={users} setUsers={setUsers} cId={cId} setcId={setcId} text={text} setText={setText} num={num} setNum={setNum} setRefresh={setRefresh} refresh={refresh}/>}/>
              <Route  element={<Nav/>}/>
              <Route  element={<Elements />}/>
   
              <Route path='/update' element={<UpdateEle 
              users={users} setUsers={setUsers} cId={cId} setcId={setcId} text={text} setText={setText} num={num} setNum={setNum}
              />}/> 
              
              


            </Routes>
           
      
      </BrowserRouter>
      
    </div>
    
  );
}

export default App;
