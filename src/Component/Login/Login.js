import { Box, TextField, Typography } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const handleSubmit =async (event) => {
      event.preventDefault();

      const data ={
        email:email,
        password:password,
    };
      console.log("Email:", email);
      console.log("Password:", password);
      await axios.post("http://localhost:3000/login", data).then((res)=>{
        console.log("res",res.data)
      })

      };
    
  
  return (
      
    <Box 

      component="form"
      onSubmit={handleSubmit}
      sx={{ display: "flex", flexDirection: "column", gap: 2, width: "300px", margin: "auto", paddingTop: "50px",color:'yellow' }}
    >
      <Typography variant="h6" gutterBottom>
        Login 
      </Typography>

      {/* حقل البريد الإلكتروني */}
      <TextField
        label="Email"
        type="email"
        style={{backgroundColor:'white'}}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        required
      />

      {/* حقل كلمة المرور */}
      <TextField
        label="Password"
        type="password"
        value={password}
        style={{backgroundColor:'white'}}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
        required
      />

      {/* زر الإرسال */}
      <Button style={{backgroundColor:'gray'}} type="submit" variant="contained" color="primary" fullWidth>
        Login
      </Button>
      <Button>Register</Button>
    </Box>
  )}

export default Login