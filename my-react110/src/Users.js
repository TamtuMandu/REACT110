function User(props) {
    return <li>I am a {props.name}</li>;
  }
  
  function Users(props) {
    return (
      <>
          <ul>
          {props.users.map((user) => <User key={user.id} name={user.name} />)}
        </ul>
      </>
    );
  }

  export default Users