import {useContext} from 'react';
import {useAuth} from './App';

const UserLogin = () =>{
  const {setUsername} = useContext(useAuth)
return(
     <div>
        <input type="text" placeholder='enter your name' 
        onChange={(e)=>
          setUsername(e.target.value)
      }/>
      </div>
    )
 
}
export default UserLogin;