// import React, { useState } from 'react';
// const App=()=>{
//     let newTime=new Date().toLocaleTimeString();

//     const[ctime,setCtime]=useState(newTime);

//     const UpdateTime=()=>{
//         newTime=new Date().toLocaleTimeString();
//         setCtime(newTime);
//     }
//     return(
//         <>
//         <h1>{ctime}</h1>
//         <button onClick ={UpdateTime}> Get Time</button>
//         </>
//     );
// };
// export default App;
// const App=()=>{
// const state=useState;
// //console.log(state);
// //const [vi,n,i]=name;

// const [count,setCount] = useState(5);
// //uestate 



// const IncNum =()=>{
//     setCount(count+5);
//     console.log('clicked');

// }
// const App=()=>{
//     return
//        ( <>
// <h1>0</h1>
// <button>Click ME</button>
//         </>
//         );
       
    

// };
// export default App;
//Form
// import React, { useState } from 'react';
// const App=()=>{
// const [name,setName]=useState();
// const [fullname,updateName]=useState({
//      fname:"",
      
// });
// const [lastName,anothername]=useState();
//     const inputEvent=(event)=>{


//        console.log(event.target.value);
//         setName(event.target.value);
//     }
//     const inputEventtwo=(event)=>{

//         lastName(event.target.value); 
//     }
//     const onSubmits= (event)=>{
//         event.preventDefault();
//         updateName(name);

//     }
//     return(
// <>

// <div>
//     <form onSubmit={onSubmits}>
//     <h1>Hello{fullname}{anothername}</h1>
// <input type='text'placeholder="Enter your Name"
// onChange={inputEvent}

// value={fullname}></input>
// </form>
// </div>
// <div>
// <form>
// <input type='password'placeholder="Enter your passwords"
 
// onChange={inputEventtwo}

// value={name}></input>

// <button onClick={inputEventtwo}>Click ME</button>
// </form>
// </div>
// </> )
// }

// export default App;   
import React from "react";
import ReactDOM from "react-dom";
//router dom wala switch
import {BrowserRouter,Route,Switch}from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Navbarmod from "./Navbarmod";
const App = ()=>{
return(
<>
<Navbarmod/>
<BrowserRouter>
<Switch>
    <Route exact path='/'component={About}/>
    <Route path='/'component={Contact}/>
     </Switch>;
</BrowserRouter>
  
    {/*<About/>
    <Contact/> */}
    </>
);
}
export default App;