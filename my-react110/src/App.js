import './App.css';
import React, { useState, useEffect } from 'react';
import Users from './Users';
// import UserList from './UserList';
// import Wrapper from './Wrapper';

// const users = [
// {
//   name: "name1",
//   lastName: "lastName1",
//   id: 1,
//   age: 27
// },
// {
//   name: "name2",
//   lastName: "lastName2",
//   id: 2,
//   age: 18
// },
// {
//   name: "name3",
//   lastName: "lastName3",
//   id: 3,
//   age: 33
// }
// ] 

function generateUsers () {
  return [
    {id: 1, name: 'Giga'},
    {id: 2, name: 'TamTa'},
    {id: 3, name: 'Tamari'},
    {id: 4, name: 'Giga'},
    {id: 5, name: 'TamTa'},
    {id: 6, name: 'Tamari'},
    {id: 7, name: 'Giga'},
    {id: 8, name: 'TamTa'},
    {id: 9, name: 'Tamari'},
    {id: 10, name: 'Giga'},
    {id: 11, name: 'TamTa'},
    {id: 12, name: 'Tamari'}
  ];

}  

function App() {
  const [users, setUsers] = useState(generateUsers().slice(0,10));
  
 
  useEffect(() => {
    document.title = `${users.length} users left`;
  });

return (
  <>
  <button onClick={() => 
  setUsers((prevUsers) => prevUsers.slice(1))}>
   Delete User
  </button>

  <Users users={users}/>
  </>
)
  // return (
  //   <div className="App">
  //    <Wrapper>
  //     <UserList isLoggedIn = {true} 
  //     users = {users}/>

  //    </Wrapper>
  //   </div>
}

export default App;






