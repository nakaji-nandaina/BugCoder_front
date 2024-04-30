import React from 'react';
import { Routes, Route,Navigate } from "react-router-dom";

import Header from './component/Header';
import TopPage from './component/TopPage';
import Issue from './component/Issue';
import SendIssue from './component/SendIssue';
import Footer from './component/Footer';
import {Container, CssBaseline,ThemeProvider,createTheme} from '@mui/material'
import IssuePage from './component/IssuePage';
import LoginPage from './component/LoginPage';
import RegisterPage from './component/RegisterPage';
import { AuthProvider,useAuth } from './component/AuthProvider';
import IssueSubmission from './component/IssueSubmission';
import SubmitCode from './component/SubmitCode';


const theme = createTheme({
  typography: {
    fontFamily: [
      'メイリオ',
      'ＭＳ Ｐゴシック',
      'Helvetica Neue',
      'Arial',
      'Hiragino Kaku Gothic ProN',
      'Hiragino Sans',
      'sans-serif',
    ].join(),
  },
  palette:{
    primary:{
      main:'#222',
    },
    secondary:{
      main:'#fff',
    },
    thirdary:{
      main:"#36C",
    },
    background:{
      default: '#eee',
    },
    text:{
      primary:'#222',
    }
  },
});

function Authenticated({children}){
  const {authenticated}=useAuth();
  return authenticated===true?children:<Navigate to="/login" replace/>;
}

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <AuthProvider>
        <Header/>
          {/* <Container maxWidth="xl"></Container> */}
          <div style={{ padding:"20px"}}></div>
          <Routes>
            <Route path="/" element={<TopPage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/register" element={<RegisterPage/>}/>
            <Route path="/issue">
              <Route path=':issueId' element={<IssuePage />} />
            </Route>
            <Route path="/issue">
              <Route path=':issueId'>
                <Route path=":submission" element={<IssueSubmission/>}/>
              </Route>
            </Route>
            <Route path="/issue">
              <Route path=':issueId'>
                <Route path=":submission" >
                  <Route path=":submissionId" element={<SubmitCode/>}/>
                </Route>
              </Route>
            </Route>
            <Route path="/sendissue" element={<Authenticated><SendIssue/></Authenticated>}/>
          </Routes>
        <Footer/>
        </AuthProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
