import React, { useState, useEffect } from 'react';
import UserForm from "./components/UserForm"
import SearchBar from "./components/SearchBar"
import UserList from "./components/UserList"
import "./App.css"
function App() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [update,setUpdate] = useState(0)

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('users'));
    if (storedUsers) {
      setUsers(storedUsers);
      setFilteredUsers(storedUsers);
    } else {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
          setUsers(data);
          setFilteredUsers(data);
          localStorage.setItem('users', JSON.stringify(data));
        })
        .catch(error => console.error(error));
    }
  },[update]);

  function handleAddUser(newUser) {
    setUsers([...users, { ...newUser, id: Date.now() }]);
    setUpdate(update+1)
    localStorage.setItem('users', JSON.stringify([...users, { ...newUser, id: Date.now() }]));
  }

  function handleDeleteUser(id) {
    setUsers(users.filter(user => user.id !== id));
    setUpdate(update+1)
    localStorage.setItem('users', JSON.stringify(users.filter(user => user.id !== id)));
  }

  function handleSearch(query) {
    setFilteredUsers(users.filter(user => user.name.toLowerCase().includes(query.toLowerCase())));
  }

  return (
    <div  className='container'>
      <SearchBar onSearch={handleSearch} />
      <UserList users={filteredUsers} onDeleteUser={handleDeleteUser} />
      <UserForm onAddUser={handleAddUser} />
    </div>
  );
}

export default App;