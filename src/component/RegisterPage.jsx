import React, { useState } from "react";
import{useForm,Controller}from "react-hook-form";
import { Grid,TextField,Button,MenuItem,FormControlLabel } from "@mui/material";
import { NavLink,useNavigate } from "react-router-dom";
import {AuthProvider, useAuth} from './AuthProvider';
import axios from "axios";

const RegisterPage = (props) => {
  const [ismiss,setmiss]=useState(false);
  axios.defaults.baseURL = 'http://localhost:3000';
  axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
  axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
  const navigate=useNavigate();
  const{control,handleSubmit}=useForm({
    defaultValue:{
      username:"",
      password:"",
      repassword:"",
    },
  });
  const onSubmit=(data,e)=>{
    setmiss(false)
    let isregist=false;
    if(data.repassword!==data.password||data.password===""||data.username===""){
      setmiss(true)
    }
    else{
      const postdata= 'user_name='+data.username+'&password='+data.password
      axios.post( 'http://localhost:5050/api/v1/user/signin',postdata,{
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
      })
        .then(res => {
            console.log(res.data.is_exist)
            if(!res.data.is_exist){
              navigate('/login')
            }
        })
        .catch((err) => {
          console.log(err) // 失敗
        })
    }
  };
  return (
    <div style={{paddingTop:"20px",paddingBottom:"20px",background:"#fff", width:"70%",minWidth:"700px",minHeight:"800px",marginRight:"auto",marginLeft:"auto",boxShadow: "0px 5px 20px #5f5f5f",}}>
      <Grid container >
        <Grid sm={1}/>
        <Grid  xs={10}>
          <h1 style={{marginBottom:"auto",fontWeight:"100"}}>新規登録</h1>
          <hr style={{marginTop:"0px",marginBottom:"10px",border:"0",borderTop:"1px solid #eee"}}/>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container direction="row">
              <Grid item xs={2}>
                <h3 style={{fontWeight:"100"}}>ユーザー名</h3>
              </Grid>
              <Grid item xs={6}>
                <Controller
                  control={control}
                  name="username"
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
              <Grid item xs={6}>
                <Controller
                  control={control}
                  name="password"
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
            </Grid><Grid container direction="row">
              <Grid item >
                <h3 style={{fontWeight:"100"}}>パスワード（再確認）</h3>
              </Grid>
              <Grid item xs={6}>
                <Controller
                  control={control}
                  name="repassword"
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
            {ismiss?<p style={{color:"#d11"}}>登録内容に不備があります</p>:<></>}
            <Grid container direction="row">
              <Grid item>
                  <Button
                    varient="outlined"
                    color="primary"
                    type="submit"
                    style={{ marginTop:"10px", backgroundColor:"#eee"}}
                  >
                    新規登録
                  </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

export default RegisterPage;