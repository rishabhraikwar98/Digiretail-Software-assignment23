import React,{useState} from 'react';
import { FaTrash } from 'react-icons/fa';

function UserList({ users, onDeleteUser }) {

  const [address] = useState(users.address)
  function handleDelete(id) {
    onDeleteUser(id);
  }
  return (
    
    <div>
      <h1 className='title'>User List</h1>
      <hr />
      <ul className='user-list'>
        {users.map(user => (
          <li key={user.id}>
            <div className='user-card'>
            <h2 className='user-name'>{user.name}</h2>
            <p><b>Email: </b>{user.email} | <b>Username: </b>{user.username}</p>
            <p><b>Phone: </b>{user.phone}</p>
            <p><b>Website: </b>{user.website}</p> 
            <p><b>Address: </b>{user.address.suite}, {user.address.street} ({user.address.zipcode}), {user.address.city}</p>
            <p><b>Company: </b>{user.company.name}</p>
            <p><b>Description: </b>{user.company.catchPhrase}</p>
            <button  className= "delete-btn" onClick={() => handleDelete(user.id)}><FaTrash /></button>
            </div>
          </li>
        ))}
      </ul>
      <hr />
    </div>
  );
}

export default UserList;
