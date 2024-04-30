import React from "react";
import logo from"../image/logo2.png"
import {Box,Link,Typography,Container} from "@mui/material";
const Footer = (props) => {
  return (
    <Box
      sx={{
        backgroundColor: "#ccc",
        p: 6,
      }}
      component="footer"
      style={{marginTop:"50px",minWidth:"700px",}}
    >
      <Container maxWidth="sm">
        <Typography variant="body2" color="text.secondary" align="center">
          {"Copyright © "}
          <Link color="inherit" href="https://twitter.com/dainainandaina">
            nandaina-van-dare
          </Link>{" "}
          {new Date().getFullYear()}
          {"."}
        </Typography>
      </Container>
    </Box>
  );
};
export default Footer;