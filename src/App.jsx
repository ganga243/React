// import React from "react";
// class App extends React.Component{
//   constructor(props){
//     super(props);
//     this.state={
//       name:"Alice"
//     }
//   }

//   changeName=()=>{
//     this.setState({
//       name:"Alice"
//     })
//   }
  
  
  
  
//   render(){
//     return(
//       <>
//       <p>Hi name is {this.state.name}</p>
//       <button onClick={this.changeName}>Change Name</button>
//       </>
//     );
//   }
// }

// export default App;
// ---------------------------------------


// import React from "react";
// class App extends React.Component{

//   constructor(props){
//     super(props);
//     this.state={
//       count:0
//     }
//   }
//   increment=()=>{
//     this.setState({
//       count:this.state.count+1
//     })
//   }

//   decrement=()=>{
//     this.setState({
//       count:this.state.count-1
//     })
//   }

//   reset=()=>{
//     this.setState({
//       count:0
    
//     })
//   }

//   render(){
//     return(
//       <div>
//         <button onClick={this.decrement}>-</button>
//         <p>count:{this.state.count}</p>
//         <button onClick={this.increment}>+</button>
//         <button onClick={this.reset}>Reset</button>
//       </div>
//     );
//   }
// }

// export default App;
// ----------------------------------------------

// *Hooks
// --------------------------------
// import React from "react";
// import { useState } from "react";

// function App(){

//     const[name,setName]=useState("Anu")

//     const[count,setCount]=useState(0);
//     return(
//         <div>
//             <p>Name:(name)</p>
//             <button onClick={()=>setName("Anjana")}>change Name</button>

//             <p>Count:{count}</p>
//             <button onClick={()=>setCount(count+1)}>+</button>
//             <button onClick={()=>setCount(count-1)}>-</button>
//         </div>
//     );
// }
// export default App;

// ---------------------------------------------
// import React from "react";
// import React, {useState} from "react";

// function App(){
//   const [show, setshow] = useState(true);

//   return (
//     <div>
//       <button onClick={()=> setshow(!show)}>show/Hide</button>
//     </div>
//   )
// }
// ----------------------------------------

// import React, { useState } from "react";

// function App() {

//   const [name, setName] = useState("");

//   return (
//     <div>
//       <input
//         type="text"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />

//       <h1>You typed: {name}</h1>
//     </div>
//   );
// }

// export default App;
// ----------------------------------------

//  import React, { useState } from "react";

// function App() {

//   const [color, setColor] = useState("White");

//   return (
//     <div style={{
//           backgroundColor: color, height: "200px"
//         }}
//     >

//       <button onClick={() => setColor("red")}>Red</button>
//       <button onClick={() => setColor("Blue")}>Blue</button>
//       <button onClick={() => setColor("Green")}>Green</button>
      
//     </div>
//   );
// }

// export default App;
// ----------------------------------------

//  import React, { useState } from "react";

// function App() {

//   const [name, setName] = useState("");
//   const [age, setAge] = useState("");

//   return (
//     <div>

//       <input
//         type="text"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />

//       <br />
//       <br />

//       <input
//         type="number"
//         value={age}
//         onChange={(e) => setAge(e.target.value)}
//       />

//       <h2>Name: {name}</h2>
//       <h2>Age: {age}</h2>

//     </div>
//   );
// }

// export default App;
// ------------------------------------------------------
// import React, { useState } from "react";

// function App() {

//   const [task, setTask] = useState("");
//   const [tasks, setTasks] = useState([]);

//   const addTask = () => {
//     if (task !== "") {
//       setTasks([...tasks, task]);
//       setTask("");
//     }
//   };

//   return (
//     <div>

//       <input
//         type="text"
//         value={task}
//         onChange={(e) => setTask(e.target.value)}
//       />

//       <button onClick={addTask}>Add</button>

//       <ul>
//         {tasks.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>

//     </div>
//   );
// }

// export default App;

