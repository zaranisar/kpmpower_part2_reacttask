import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Welcome.css'; 

function Welcome() {
  const location = useLocation();
  //retrieve username to display welcome message
  const username = new URLSearchParams(location.search).get('username');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div className="welcome-container">
      <h1>Welcome {username}</h1>
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>email</th>
            <th>user name</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.username}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Welcome;
