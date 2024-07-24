import React, { useState } from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const [inputs, setInputs] = useState({ Firstname: "", Lastname: "", Email: "", Password: "" });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (inputs.Firstname.trim() === "") newErrors.Firstname = "First name is required.";
    if (inputs.Lastname.trim() === "") newErrors.Lastname = "Last name is required.";
    if (!emailPattern.test(inputs.Email)) newErrors.Email = "Please enter a valid email.";
    if (inputs.Password.length < 7) newErrors.Password = "Password must be at least 7 characters long.";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const addHandler = () => {
    if (!validateForm()) {
      alert("Please fix the errors in the form.");
      return;
    }
    console.log("Clicked");
    axios.post("http://localhost:3001/add", inputs)
      .then((res) => {
        console.log(res);
        alert(res.data.message);
        navigate('/l');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '85vh', padding: '0 2rem' }}>
      <video autoPlay loop muted style={{position: 'absolute',top: 0,left: 0,width: '100%',height: '100%',objectFit: 'cover',zIndex: -1,}}>
        <source
          src="src/images/videoplayback.mp4"
          type="video/mp4"
        />
      </video>
      <div>
        <Typography variant="subtitle1" gutterBottom sx={{ textAlign: 'center', fontSize: '27px', fontFamily: 'cursive', color: 'darkblue' }}>
          Already have an account ? <br />
          Click below to Login
          <br />
          <Button variant="contained" color="primary">
            <Link to={'/l'} style={{ textDecoration: "none", color: "white" }}>
              Login
            </Link>
          </Button>
        </Typography>
      </div>
      <Card sx={{ maxWidth: 345, padding: 4, opacity: 0.9 }}>
        <CardMedia />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div" sx={{ textAlign: 'center', fontFamily: 'fantasy', color: 'darkblue' }}>
            Sign Up
          </Typography>
          <TextField
            fullWidth
            label="First Name"
            variant="outlined"
            margin="normal"
            name="Firstname"
            value={inputs.Firstname}
            onChange={handleChange}
            error={Boolean(errors.Firstname)}
            helperText={errors.Firstname}
          />
          <TextField
            fullWidth
            label="Last Name"
            variant="outlined"
            margin="normal"
            name="Lastname"
            value={inputs.Lastname}
            onChange={handleChange}
            error={Boolean(errors.Lastname)}
            helperText={errors.Lastname}
          />
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            margin="normal"
            name="Email"
            value={inputs.Email}
            onChange={handleChange}
            error={Boolean(errors.Email)}
            helperText={errors.Email}
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
            error={Boolean(errors.Password)}
            helperText={errors.Password}
          />
        </CardContent>
        <CardActions>
          <Button fullWidth variant="contained" color="primary" onClick={addHandler}>
            Submit
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Signup;
