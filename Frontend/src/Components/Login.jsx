import React, { useState } from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [inputs, setInputs] = useState({ Email: "", Password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
  };

  const loginHandler = () => {
    axios.post("http://localhost:3001/login", inputs)
    .then((res) => {
      const { message, token, name, role } = res.data;
      //setMessage(message);
      // Store token in local storage or context
      localStorage.setItem('token', token);
      localStorage.setItem('name', name);
      localStorage.setItem('role', role);
      
      
      if (role === 'admin') {
        alert(res.data.message);
        navigate('/ad'); // Redirect admin to admin dashboard
      } else {
        alert(res.data.message);
        navigate('/d');  // Redirect regular user to user dashboard
      }
    })
    .catch((err) => {
      console.error(err);
      alert("Incorrect email or password.");
    });
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '85vh', padding: '0 2rem' }}>
      <div>
      <video autoPlay loop muted style={{position: 'absolute',top: 0,left: 0,width: '100%',height: '100%',objectFit: 'cover',zIndex: -1,}}>
            <source
              src="src\images\videoplayback.mp4"
              type="video/mp4"
            />
      </video>
        <Typography variant="subtitle1" gutterBottom sx={{ textAlign: 'center', fontSize: '27px', fontFamily: 'cursive', color: 'darkblue' }}>
          Don't have an account ? <br />
          Click below to Signup
          <br />
          <Button variant="contained" color="primary">
            <Link to={'/s'} style={{ textDecoration: "none", color: "white" }}>
              Signup
            </Link>
          </Button>
        </Typography>
      </div>
      <Card sx={{ maxWidth: 345, padding: 4, opacity: 0.9 }}>
        <CardContent>
          <Typography gutterBottom variant="h4" component="div" sx={{ textAlign: 'center', fontFamily: 'fantasy', color: 'darkblue' }}>
            LOGIN
          </Typography>
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            margin="normal"
            name="Email"
            value={inputs.Email}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="outlined"
            margin="normal"
            name="Password"
            value={inputs.Password}
            onChange={handleChange}
          />
        </CardContent>
        <CardActions>
          <Button fullWidth variant="contained" color="primary" onClick={loginHandler}>
            Submit
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Login;