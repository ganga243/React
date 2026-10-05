// import { createContext } from "react";

// const UserContext = createContext(null);

// export default UserContext;
// -----------------------------------------------

import { createContext, useState } from "react";

const UserContext = createContext(null);

export function UserProvider({ children }) {
  const [user, setUser] = useState({
    name: "Amal",
    email: "amal@gmail.com"
  });

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;