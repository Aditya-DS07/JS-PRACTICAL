import { useState, useEffect } from 'react';
import axios from 'axios';
import Question2child from './Question2child';

const Question2Parent = () => {
  const [users, setUsers] = useState([]);

  const fetch = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    setUsers(response.data); 
  };

  useEffect(() => {
    fetch()
  }, []); 

  return (
    <div>
      {users.map((user) => (
        <Question2child 
          name={user.username} 
          email={user.email} 
        />
      ))}
    </div>
  );
};

export default Question2Parent;