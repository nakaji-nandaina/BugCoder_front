import React from "react";
import CodeViewer from "./CodeViewer";
import GrayBox from "./GrayBox";
import { Grid,TextField,Button,MenuItem, AppBar, } from "@mui/material";
import {Textarea} from "@mui/joy";
import{useForm,Controller}from "react-hook-form";
import IssueAppbar from "./IssueAppbar";
import { NavLink, useParams } from "react-router-dom";
import { DataGrid,GridColDef,GridRowsProp } from "@mui/x-data-grid";
import { useState,useEffect } from "react";

function colums (issue_id) {
  const submissionlink="/issue/"+String(issue_id)+"/submission/"
  const colum =[
    {
      field: 'deleteBtn',
      headerName: '詳細',
      sortable: false,
      width: 90,
      disableClickEventBubbling: true,
      renderCell: (params) => <NavLink to={submissionlink+String(params.id)}><Button rowId={ params.id } >詳細</Button></NavLink>
    },
    {field:'id',headername:'id',type:'number',flex:1},
    {
      field: 'name',
      headerName: 'ユーザー名',
      type: 'string',
      flex: 2,
    },
    {
      field: 'result',
      headerName: '結果',
      type: 'string',
      flex: 1,
    },
    {
      field: 'date',
      headerName: '提出日時',
      type: 'string',
      flex: 1.5,
    },
  ];
  return colum;
}
function Rows(datas){
  const rows=[]
  console.log(datas)
  if(datas===null)return rows
  for(let i=0;i<datas.length;i++){
    rows.push({id:datas[i].code_id,name:"username",result:datas[i].results[0].result,date:datas[i].create_at})
  }
  return rows
}

const IssueSubmission = (props) => {
  const { issueId,submission } = useParams();
  console.log(issueId)
  console.log(submission)
  const [data, setData] = useState([]);
  const issueDataLink='http://localhost:5050/api/v1/code/'+String(issueId);
  console.log(String(issueDataLink));
  useEffect(() => {
      fetch(issueDataLink)
          .then(response => response.json())
          .then(data=> setData(data.children))
          .catch(error => console.error('Error fetching data:', error));
  }, []);
  console.log(data)
  return (
    <div style={{paddingTop:"30px",paddingBottom:"20px",background:"#fff", width:"70%",minWidth:"700px",minHeight:"800px",marginRight:"auto",marginLeft:"auto",boxShadow: "0px 5px 10px #5f5f5f",}}>
      <Grid container>
        <Grid sm={1}/>
          <Grid xs={10} spacing={2}>
            <IssueAppbar page="1" id={issueId}/>
            <h1 style={{marginBottom:"0px",paddingTop:"20px",fontSize:"28px",fontWeight:"600"}}>提出結果</h1>
            <hr style={{marginTop:"10px",marginBottom:"20px",border:"0",borderTop:"1px solid #eee"}}/>
            <DataGrid rows={Rows(data)} columns={colums(issueId)}/>
          </Grid>
        </Grid>
    </div>
  );
};

export default IssueSubmission;