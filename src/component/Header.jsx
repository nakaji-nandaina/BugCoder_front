import React from "react";
import { NavLink } from 'react-router-dom';
import './styles.css';
import AcountMenu from "./AcountMenu";
import { useNavigate } from 'react-router-dom';
import logo from"../image/logo2.png"

const Header = (props) => {
  return (
    <header style={{zIndex:"100"}}>
      <div class="flexbox">
        <NavLink to={"/"}style={{textDecoration:"None"}}>
        <div class="flexbox">
        <img class="logo" src={logo} alt="logo"/>
        <h1 style={{position: "relative",
          textAlign: "left",
          color: "#eee",
          marginLeft: "10px",
          paddingTop: "5px",
          marginBottom: "0",
          }}>Bug
        </h1>
        <h1 style={{position: "relative",
          textAlign: "left",
          color: "#eee",
          marginLeft: "10px",
          paddingTop: "5px",
          marginBottom: "0",
          }}>Coder
        </h1>
        </div>
        </NavLink>
        <nav>
          <ul class="global-nav">
            <NavLink to={"/"}>
            <li><a class="a1" >問題一覧</a></li>
            </NavLink>
            <NavLink to={"/sendissue"}>
            <li><a class="a1">投稿する</a></li>
            </NavLink>
            <li><a class="a1" >アカウント</a>
              <ul class="nav2" >
                <AcountMenu/>
                <li class="solid1"><a class=" downlist" href="">プロフィール</a></li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;