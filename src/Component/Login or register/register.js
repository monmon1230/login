import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, TextField, Typography } from "@mui/material";
import { Button } from "react-bootstrap";
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Error, setError] = useState("");
  const navigate = useNavigate();
  const data = {
    email: email,
    password: password,
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // التحقق من أن الحقول ليست فارغة وأن كلمة المرور مطابقة
    if (email && password) {
      if (data.password === password) {
        navigate("/home");
      } else {
        setError("كلمة المرور غير متطابقة");
      }
    } else {
      // عرض رسالة خطأ إذا كانت البيانات غير مكتملة
      setError("من فضلك أدخل جميع الحقول المطلوبة");
    }
  };
  return (
    <Box
      onSubmit={handleSubmit}
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        width: "300px",
        margin: "auto",
        paddingTop: "50px",
        color: "yellow",
      }}
    >
      {" "}
      <Typography variant="h6" gutterBottom>
        register
      </Typography>
      <TextField
        label="firstname"
        type="name"
        style={{ backgroundColor: "white", marginBottom: "2rem" }}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        required
      />
      <TextField
        label="lastname"
        type="name"
        style={{ backgroundColor: "white", marginBottom: "2rem" }}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        required
      />
      <TextField
        label="Email"
        type="email"
        style={{ backgroundColor: "white", marginBottom: "2rem" }}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        required
      />
      <TextField
        label="Password"
        type="password"
        value={password}
        style={{ backgroundColor: "white", marginBottom: "2rem" }}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
        required
      />
      <TextField
        label="confirmPassword"
        type="password"
        value={password}
        style={{ backgroundColor: "white", marginBottom: "2rem" }}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
        required
      />
      <Link to={"/"}>
        <Button
          style={{ backgroundColor: "gray", width: "100%" }}
          onClick={console.log(email, password)}
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
        >
          Login
        </Button>
      </Link>{" "}
    </Box>
  );
};

export default Register;
