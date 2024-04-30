import React, { useState } from 'react';
import {AuthProvider, useAuth} from './AuthProvider';
import { NavLink } from 'react-router-dom';


const AcountMenu = () => {
  const{authenticated,login,logout,id}=useAuth();
  return (
    <>
      {
        authenticated?<li class="solid1"><a class=" downlist" onClick={logout}>ログアウト</a></li>:<NavLink to="/login"><li class="solid1"><a class=" downlist">ログイン</a></li></NavLink>
      }
    </>
  );
};

export default AcountMenu;