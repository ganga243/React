// import { useState, useContext } from "react";
// import UserContext from "./UserContext";

// function App() {
//   const [user, setUser] = useState({
//     name: "amal",
//     email: "amal@gmail.com"
//   });

//   return (
//     <div>
//       <h1>App</h1>

//       <UserContext.Provider value={user}>
//         <Child1 />
//       </UserContext.Provider>
//     </div>
//   );
// }

// function Child1() {
//   return (
//     <>
//       <h1>Child 1</h1>
//       <Child2 />
//     </>
//   );
// }

// function Child2() {
//   return (
//     <>
//       <h1>Child 2</h1>
//       <Child3 />
//     </>
//   );
// }

// function Child3() {
//   return (
//     <>
//       <h1>Child 3</h1>
//       <Child4 />
//     </>
//   );
// }

// function Child4() {
//   const user = useContext(UserContext);

//   return (
//     <>
//       <h2>{user.name}</h2>
//       <h2>{user.email}</h2>
//     </>
//   );
// }

// export default App;
// --------------------------------------------


import { useContext } from "react";
import UserContext, { UserProvider } from "./UserContext";

function App() {
  return (
    <div>
      <h1>App</h1>

      <UserProvider>
        <Child1 />
      </UserProvider>
    </div>
  );
}

function Child1() {
  return (
    <>
      <h1>Child 1</h1>
      <Child2 />
    </>
  );
}

function Child2() {
  return (
    <>
      <h1>Child 2</h1>
      <Child3 />
    </>
  );
}

function Child3() {
  return (
    <>
      <h1>Child 3</h1>
      <Child4 />
    </>
  );
}

function Child4() {
  const user = useContext(UserContext);

  return (
    <>
      <h2>{user.name}</h2>
      <h2>{user.email}</h2>
    </>
  );
}

export default App;