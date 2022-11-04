import './App.css';
import UserList from './UserList';
import Wrapper from './Wrapper';

const users = [
{
  name: "name1",
  lastName: "lastName1",
  id: 1,
  age: 27
},
{
  name: "name2",
  lastName: "lastName2",
  id: 2,
  age: 18
},
{
  name: "name3",
  lastName: "lastName3",
  id: 3,
  age: 33
}
] 

function App() {
  return (
    <div className="App">
     <Wrapper>
      <UserList isLoggedIn = {true} 
      users = {users}/>

     </Wrapper>
    </div>
  );
}

export default App;
