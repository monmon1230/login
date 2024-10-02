import "bootstrap/dist/css/bootstrap.min.css";

import Login from "./Component/Login or register/Login";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import HomePage from "./Component/HomePage/HomePage";
import Register from "./Component/Login or register/register";

const App = () => { 

  return (
    <div className="App">
      <BrowserRouter>
      <Container className="Container">
        <Routes>
        
            <Route path="/" element={<Login/>} />
            <Route path="/login" element={<HomePage/>}/>
            <Route path="/register" element={<Register/>}/>
       
        </Routes>
        </Container>
      </BrowserRouter>
    </div>
  );
};

export default App;
