import React, { createContext, useContext, useState } from 'react';
import LoginPage from './LoginPage';
import { NavLink, useNavigate,Navigate } from 'react-router-dom';
const AuthContext = createContext();
const AuthProvider = ({children}) => {
  const navigate=useNavigate();
  const [authenticated,setAuthenticated] = useState(false);
  const [userid,setUserid]=useState("");
  const [username,setUsername]=useState("");
  function login (user_id,user_name) {
    setAuthenticated(true);
    setUserid(user_id);
    setUsername(user_name);
  }
  function logout () {
    setAuthenticated(false);
    navigate("/login");
  }
  const auth = {
    authenticated,
    login,
    logout,
    userid,
    username,
  }

  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  );
}

const useAuth = () => {
  const context = useContext(AuthContext);
  console.log(context)
  return context;
};



export {AuthProvider,useAuth}