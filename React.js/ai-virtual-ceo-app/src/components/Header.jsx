// src/components/Header.jsx
import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import logo from "../assets/logo.png";  // Ensure this path is correct

const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#212121" }}>
      <Toolbar>
        <img src={logo} alt="Logo" style={{ height: "40px", marginRight: "20px" }} />
        <Typography variant="h6">AI Virtual CEO</Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
