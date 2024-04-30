import React from "react";
import{useForm,Controller}from "react-hook-form";
import { Grid,TextField,Button,MenuItem,FormControlLabel } from "@mui/material";
import { NavLink,Navigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {AuthProvider, useAuth} from './AuthProvider';


const LoginPage = (props) => {
  const{authenticated,login,logout,userid,username}=useAuth();
  axios.defaults.baseURL = 'http://localhost:3000';
  axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
  axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
  const [resData, setData] = useState();
  const navigate=useNavigate();
  const{control,handleSubmit}=useForm({
    defaultValue:{
      Username:'',
      Password:'',
    },
  });

  const onSubmit=(data,e)=>{
    const postdata= 'user_name='+data.Username+'&password='+data.Password
    axios.post( 'http://localhost:5050/api/v1/user/login',postdata,{
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    })
      .then(res => {
          console.log('返信アリ')
          setData(res.data)
          if(res.data.is_exist){
            login(res.data.user_id,res.data.user_name);
            navigate("/")
          }
      })
      .catch((err) => {
        console.log(err) // 失敗
      })
  };
  return (
    <div style={{paddingTop:"20px",paddingBottom:"20px",background:"#fff", width:"70%",minWidth:"700px",minHeight:"800px",marginRight:"auto",marginLeft:"auto",boxShadow: "0px 5px 20px #5f5f5f",}}>
      <Grid container >
        <Grid sm={1}/>
        <Grid  xs={10}>
          <h1 style={{marginBottom:"auto",fontWeight:"100"}}>ログイン</h1>
          <hr style={{marginTop:"0px",marginBottom:"10px",border:"0",borderTop:"1px solid #eee"}}/>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container direction="row">
              <Grid item xs={2}>
                <h3 style={{fontWeight:"100"}}>ユーザー名</h3>
              </Grid>
              <Grid item xs={10}>
                <Controller
                  control={control}
                  name="Username"
                  render={({field})=>(
                    <TextField
                      {...field}
                      fullWidth
                      size="small"
                      margin="normal"
                    />
                  )}
                />
              </Grid>
            </Grid>
            <Grid container direction="row">
              <Grid item xs={2}>
                <h3 style={{fontWeight:"100"}}>パスワード</h3>
              </Grid>
              <Grid item xs={10}>
                <Controller
                  control={control}
                  name="Password"
                  render={({field})=>(
                    <TextField
                      {...field}
                      fullWidth
                      margin="normal"
                      size="small"
                      type="password"
                    />
                  )}
                />
              </Grid>
            </Grid>
            <Grid container direction="row">
              <Grid item>
                <Button
                  varient="contained"
                  color="secondary"
                  type="submit"
                  style={{backgroundColor:"#36c", marginTop:"10px"}}
                >
                  ログイン
                </Button>
              </Grid>
              <Grid item>
                <p>または</p>
              </Grid>
              <Grid item>
                <NavLink to="/register">
                  <Button
                    varient="outlined"
                    color="primary"
                    style={{ marginTop:"10px", backgroundColor:"#eee"}}
                  >
                    新規登録
                  </Button>
                </NavLink>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

export default LoginPage;