import React from "react";
import{useForm,Controller}from "react-hook-form";
import { Grid,TextField,Button,MenuItem,FormControlLabel } from "@mui/material";
import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import IssueAppbar from "./IssueAppbar";
import { DataGrid } from "@mui/x-data-grid";
function ColorfulTextField({ datas }) {
  // 各行の文字色
  const colors = ['#880000', '#111111', '#476B43']; // 例として3つの色を使用
  const bgcolors=['#FFD7D5', '#FFFFFF', '#CCFFD8'];
  //#CCFFD8 #E6FFEC
  return (
    <div>
      {datas.map((data, index) => (
        data.code.split(/(\n)/).map((d,i)=>(
          <span style={{ background:bgcolors[data.status+1], color: colors[data.status+1] }}>
          {d===""||d===`
`?d:<>{d}<br/></>}
          </span>
        ))
        // 各行のspan要素に適用するスタイルを設定する
      ))}
    </div>
  );
}
const colums =[
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

const SubmitCode = (props) => {
  const { issueId,submission,submissionId } = useParams([]);
  const [data, setData] = useState([]);
  const [submitedcode,setCode]=useState([]);
  
  const [Rows,setRows]=useState([]);
  const issueDataLink='http://localhost:5050/api/v1/code/'+String(submissionId);
  //console.log(String(issueDataLink));
  useEffect(() => {
      fetch(issueDataLink)
          .then(response => response.json())
          .then(data=>{
            setData(data.children)
            setCode(data.code_diff);
            setRows([{id:data.code_id,name:data.user_name,result:data.results[0].result,date:data.create_at}])
            console.log(data)
          }
          )
          .catch(error => console.error('Error fetching data:', error));
  }, []);
  return (
    <div style={{paddingTop:"30px",paddingBottom:"20px",background:"#fff", width:"70%",minWidth:"700px",minHeight:"800px",marginRight:"auto",marginLeft:"auto",boxShadow: "0px 5px 20px #5f5f5f",}}>
      <Grid container >
        <Grid sm={1}/>
          <Grid  xs={10} >
          <IssueAppbar page="1" id={issueId}/>
          <h1 style={{marginBottom:"0px",paddingTop:"20px",fontSize:"28px",fontWeight:"600"}}>提出コード</h1>
          <hr style={{marginTop:"0px",marginBottom:"10px",border:"0",borderTop:"1px solid #eee"}}/>
          <div style={{outlineColor:"#ddd",outlineStyle:"solid",padding:"20px",marginBottom:"20px"}}>
            <ColorfulTextField datas={submitedcode}/>
          </div>
          <DataGrid rows={Rows} columns={colums}/>
          </Grid>
      </Grid>
    </div>
  );
};

export default SubmitCode;