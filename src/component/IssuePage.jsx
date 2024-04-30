import React from "react";
import { useParams } from "react-router-dom";
import { Navigate, Route } from 'react-router-dom';
import { useState,useEffect } from "react";
import Issue from "./Issue";
import Requests from "./Requests";

const IssuePage=(props)=>{
  const { issueId } = useParams();
  const [data, setData] = useState(0);
  const lang=["cpp","python"];
  const issueDataLink='http://localhost:5050/api/v1/code/'+String(issueId);
  console.log(String(issueDataLink));
  useEffect(() => {
      fetch(issueDataLink)
          .then(response => response.json())
          .then(data=> setData(data))
          .catch(error => console.error('Error fetching data:', error));
  }, []);

  console.log(data)
  return(
    <>
      {data&&<Issue title={data.title} explane={data.detail} code={data.code_data} issue_id={issueId} input={data.answer&&data.answer[0].indata} output={data.answer&&data.answer[0].outdata} language={lang[0]}/>}
    </>
  );
}
export default IssuePage;