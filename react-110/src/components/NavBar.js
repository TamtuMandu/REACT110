import React from 'react';
import { useState } from "react";
  
function NavBar(props) {
  const [user, setUser] = useState("Tamta Mandaria");

  return (
    <>
      <h1>{`Hello ${user}! You Have ${props.taskCount} Tasks To do`}</h1>
    </>
  );
}





export default NavBar;