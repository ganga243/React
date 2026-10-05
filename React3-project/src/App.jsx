// *Use CallBack Function
// -------------------------
// import { useState, useCallback } from "react";

// function App(){

//   const [count, setCount]=useState(0);

//   const showMessage=useCallback(()=> {
//     // console.log("Hello");
//     console.log("Count is",count);
//   },[]);

//   return(
//     <div>
//       <h1>{count}</h1>

//       <button onClick={()=> setCount(count+1)}>
//         Increase
//       </button>

//       {/* <button onClick={showMessage}>ShowMessage</button> */}
//       <button onClick={showCount}>ShowCount</button>
      
  
//     </div>
//   );
// }

// export default App;
// ------------------------------------------
// EG:2

// import { useState, useCallback } from "react";

// function App() {

//   const [count, setCount] = useState(0);

//   const showCount = useCallback(() => {
//     console.log("Count is:", count);
//   }, [count]);

//   return (
//     <div>

//       <h1>{count}</h1>

//       <button onClick={() => setCount(count + 1)}>
//         Increase
//       </button>

//       <button onClick={showCount}>
//         Show Count
//       </button>

//     </div>
//   );
// }

// export default App;
// ------------------------------

// parent to child variable enthaa store agunnathu ennu

// import { useState, useCallback } from "react";
// import Child from "./Child";

// function App() {

//   const [count, setCount] = useState(0);

//   const handleClick = useCallback(() => {
//     console.log("Button clicked");
//   }, []);

//   return (
//     <div>

//       <h1>Count: {count}</h1>

//       <button onClick={() => setCount(count + 1)}>
//         Increase
//       </button>

//       <Child onClick={handleClick} />

//     </div>
//   );
// }

// export default App;
// -----------------------------------

// import { useState, useCallback, memo } from "react";

// const child = memo(function Child({onclick}) {

//   console.log("Child rentered");

//   return(
//     <button onClick={onClick}>Child Button</button>
//   );
  
// });

// function App(){

//   const [count, setCount] = useState(0);
//   console.log("Hello");
// },[];

// return (
//   <div>
//     <h1>{count}</h1>
//     <button onClick={() => setCount(count + 1)}>
//          Increase
//        </button>

//        <Child onClick={handleClick} />

//   </div>
// );
// }
// ---------------------------


import useCounter from "./useCounter";

function App() {
  const { count, increment, decrement } = useCounter();

  return (
    <div>
      <h1>Count: {count}</h1>

      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default App;

