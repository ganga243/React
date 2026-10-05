// import { Component } from "react";
// import Child1 from "./components/Child1";
// class App extends Component{
//   constructor(props){
//     super(props)
//     this.state ={
//       count:0,
//       isVisible:false
//     }
//   }
//   componentDidMount(){
//     console.log("Component created")
//   }
//   componentDidUpdate(){
//     console.log("component Updated")
//   }
//   componentWillUnmount(){
//     console.log("component removed")
//   }
//   render(){
//     return <>
//     <h1></h1>
//     <button onClick={()=>this.setState({
//       count:this.state.count+1
//     })}>Count is{this.state}</button>
//     </>
//   }
// }

// -------------------------------------------
// *Use Memo

// import React, {useState, useMemo} from "react";

// function App(){
  
//   const [count, setCount] = useState(0);

//   const double = useMemo(()=> {
//     console.log("calculating...");

//     return count * 2;
// }, [count]);

// return (
//   <div>

//     <h1> Count: {count}</h1>

//     <h2> Double: {double}</h2>

//     <button onClick={()=> setCount(count+1)}>Increase</button>
//   </div>

// );
// }
// export default App;
// ----------------------------------------
// Eg:2

// import React,{useState,useMemo} from "react";
// function App(){

//   const[number,setNumber]=useState(10);
//   const[count,setCount]=useState(0);

//   const square=useMemo(()=>{
//     console.log("Calculating square...");
//     return number * number;
//   },[number]);

//   return(
//     <div>
//       <h1>Count:{count}</h1>
//       <h1>Square:{square}</h1>

//       <button onClick={()=>setCount(count+1)}>Increment Count</button>
//       <button onClick={()=>setNumber(number+1)}>Increment number</button>

//     </div>
//   );

// }
// export default App;
// ------------------------------------
// *Eg:3

// import React,{useState,useMemo} from "react";

// function App(){

//   const[number, setNumber]=useState(1);
//   const[count, setCount]= useState(0);

//   const expensiveCalculation = useMemo(()=>{

//     console.log("Expensive calulation running...");

//     let total =0;

//     for (let i=0; i< 100000000; i++){
//       total +=number;
//     }

//     return total;
// },[number]);

// return (
//   <div>
//   <h1>Number:{number}</h1>
//   <h2>Result: {expensiveCalculation}</h2>
//   <button onClick={()=>setNumber(number+1)}>Change Number</button>

//   <br /><br />

//   <h2>Count:{count}</h2>

//   <button onClick={()=> setCount(count+1)}>Increase Count</button>
//   </div>
// );
// }
// export default App;
// ------------------------------------------

// EG4:Array 

// import React, { useState, useMemo } from "react";

// function App() {

//   const [search, setSearch] = useState("");
//   const [count, setCount] = useState(0);

//   const products = [
//     "Laptop",
//     "Mobile",
//     "Keyboard",
//     "Mouse",
//     "Monitor",
//   ];

//   const filteredProducts = useMemo(() => {
//     console.log("Filtering products...");

//     return products.filter(product =>
//       product.toLowerCase().includes(search.toLowerCase())
//     );

//   }, [search]);

//   return (
//     <div>
//       <h1>Products</h1>

//       <input
//         type="text"
//         placeholder="Search Products"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//       />

//       <ul>
//         {filteredProducts.map((product, index) => (
//           <li key={index}>{product}</li>
//         ))}
//       </ul>

//       <hr />

//       <h2>Count: {count}</h2>

//       <button onClick={() => setCount(count + 1)}>
//         Increase count
//       </button>
//     </div>
//   );
// }

// export default App;
// ------------------------------
//* conditional renturing

// import React from "react";

// function App(){

//   const isLoggedIn = true;

//   if(isLoggedIn){
//     return (
//       <div>
//         <h1> Welocome User!</h1>
//         <button>Logout</button>
//       </div>
//     );
//   }else {
//     return(
//       <div>
//         <h1>Please Login</h1>
//         <button>Login</button>
//       </div>
//     );
//   }

// }
// export default App;
// -----------------------------------
// EG:2

import React from "react";

function App(){

  const isLoggedIn = false;

  return (
    <div>
      {isLoggedIn ? (
        <div> 
          <h1>Welcome User!</h1>
          <button>Logout</button>
          </div>
      ):(
        <div>
          <h1>Please Login</h1>
          <button>Login</button>
          </div>
      )}
      </div>
    
  );
}

export default App;

