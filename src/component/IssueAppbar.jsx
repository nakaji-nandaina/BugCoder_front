import React from "react";
import CodeViewer from "./CodeViewer";
import GrayBox from "./GrayBox";
import { Grid,TextField,Button,MenuItem, AppBar,Toolbar} from "@mui/material";
import { NavLink } from "react-router-dom";

const IssueAppbar = ({page,id}) => {
  const mainIssue="/issue/"+String(id);
  const submissionIssue="/issue/"+String(id)+"/submission";
  return (
    <div style={{position:"fixed",backgroundColor:"#eee",borderBottom:"#aaa",width:"auto" }}>
      <NavLink to={mainIssue}>
        {page===String(0)?<Button backgroundColor="#fff">問題</Button>:<Button backgroundColor="#ddd">問題</Button>}
      </NavLink>
      <NavLink to={submissionIssue}>
        {page==="1"?<Button backgroundColor="#fff">提出結果</Button>:<Button backgroundColor="#ddd">提出結果</Button>}
      </NavLink>
    </div>
  );
};

export default IssueAppbar;