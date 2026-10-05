// import React, { useEffect } from "react";

const { useState } = require("react");

// function App() {

//     useEffect(() => {
//         console.log("Hello");
//     });

//     return (
//         <div>
//             <h1>Hello React</h1>
//         </div>
//     );
// }

// export default App;
// --------------------------------------

// import React,{useState, useEffect} from "react";

// function App(){
  
//   const [count, setCount] = useState(0);

//   useEffect(()=>{
//     console.log("Count changed:", count);
//   },[count]);

//   return (
//     <div>

//       <h1> count: {count}</h1>

//       <button onClick={()=> setCount(count +1)}>+</button>
//     </div>
//   );
// }

// export default App;
// -----------------------------------

// import React,{useState, useEffect} from "react";

// function App(){
  
//   const [count, setCount] = useState(0);

//   useEffect(()=>{
//     if(count>=5){
//     console.log("Count changed to 5!");
//   }
//   },[count]);

//   return (
//     <div>

//       <h1> count: {count}</h1>

//       <button onClick={()=> setCount(count +1)}>+</button>
//     </div>
//   );
// }

// export default App;
// -----------------------------------------------


// import React, { useEffect, useState } from "react";

// function App() {

//     const [name, setName] = useState("");

//     useEffect(()=>{
//       console.log("Name is changed",name)
//     },[name]);
   
//     return (
//         <div>
//           <input type="text"value={name}
//           onChange={(e)=> setName(e.target.value)}
//             />

//             <h2>Hello{name}</h2>
          
//         </div>
//     );
// }

// export default App;
// ---------------------------------------------

import React,{useEffect,useState} from "react";

function App(){

  const [name,setName]=useState("Anu")
  
}
useEffect(()=>{
  console.log("Name is changed")
})


