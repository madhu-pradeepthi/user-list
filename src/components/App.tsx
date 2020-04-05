import React, {FC, useState} from 'react';
import { UserList } from './UserList';
import { AddUserForm } from './AddUserForm';
import '../styles/App.css'

const App: FC = () => {

  const [users, setUsers] = useState([
    {
      name: 'First User', randomUserSelected: false
    } 
    ,
    { 
      name: 'Second User', randomUserSelected: false 
    }
  ])

  const [userSelected, setUserSelected] = useState(0)

  const removeUser = (index: number) => {
    setUsers(users.filter((user, i) => { 
      return i !== index;
    }))
  }

  const addUser = (user: string) => {
    setUsers([...users, {'name': user, randomUserSelected: false}])
  }

  const randomUser = () => {
    const usersCount = users.length;
    if(usersCount === 0) return;
    if(usersCount === 1){
      setUserSelected(0);
      return;
    }
    let randomUser = userSelected
    do {
      randomUser = Math.floor(Math.random() * usersCount);
    } while (randomUser === userSelected);
    setUserSelected(randomUser)
    users.forEach((user) => { user.randomUserSelected = false });
  }
  
  if(users.length > 0 && users[userSelected])
  users[userSelected].randomUserSelected = true;

  return (
    <React.Fragment>
      <h1>User List</h1>
      <UserList userData={users} removeUser={removeUser}></UserList>
      <h2>Add New User</h2>
      <AddUserForm addUserData={addUser}></AddUserForm>
      <h2>Pick a user randomly</h2>
      <button onClick={randomUser}>Select a Random User</button>
      <div className='info'>* Selected user row will be highlighted with black outline</div>
      {users.length > 0 && users[userSelected] && <div className='selected-user-name'>Selected User is <strong>{users[userSelected].name}</strong></div>}
      </React.Fragment>
  );
}

export default App;