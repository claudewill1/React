import React, {useState, Fragment} from 'react';
import UserTable from './tables/UserTable';
import AddUserForm from './forms/AddUserForm.js';
import EditUserForm from './forms/EditUserForm';

const App = () => {
  const userData = [
    {id:1,name:'Claude', username: 'claudewill1'},
    {id: 2, name: 'Bob', username: 'BobbyWobby1' },
    {id: 3, name: 'Amy', username: 'abrightheart1'}
  ];

  const initialFormState = { id: null, name: '', username: '' }

  const [users, setUsers] = useState(userData);
  const [currentUser, setCurrentUser] = useState(initialFormState)
  const [editing, setEditing] = useState(false);
  
  const addUser = user => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const deleteUser = id => setUsers(users.filter(user => user.id !== id));

  const editRow = user => {
    setEditing(true);

    setCurrentUser({id: user.id, name: user.name, username: user.username});
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);

    setUsers(users.map(user=> (user.id === id ? updatedUser:user)));
  }
  return(
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <Fragment>
              <h2>Edit user</h2>
              <EditUserForm
                  editing={editing}
                  setEditing={setEditing}
                  currentUser={currentUser}
                  updateUser={updateUser}
                  />
            </Fragment>
          ):(
            <Fragment>
              <h2>Add user</h2>
              <AddUserForm addUser={addUser} />
            </Fragment>
          )}
          
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  )
}

export default App;
