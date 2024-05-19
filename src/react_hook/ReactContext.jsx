import React from 'react';
import {createContext,useState}  from 'react';
import UserLogin from './UserLogin';

export const useAuth=createContext({});


 function ReactContext(props) {
  const [username,setUsername]=useState('');
  return (
    <useAuth.Provider value={{
      username,
      setUsername
    }}>
    <div className='App'>
      <h1>Hello React i am {username}.</h1>
      <h2>Start editing to see some magic happen!</h2>
      <UserLogin/>
    </div>
    </useAuth.Provider>
  );
}
export default ReactContext;
// Log to console
console.log('Hello console')