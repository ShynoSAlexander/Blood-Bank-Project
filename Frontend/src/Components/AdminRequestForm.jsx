import React, { useState } from 'react';
import { Container, TextField, Button, MenuItem, Typography,AppBar,Toolbar,Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import backgroundImage from '../images/blood.jpg';
import { Link } from 'react-router-dom';
const AdminRequestForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
    phoneNumber: '',
    bloodType: '',
    requestCategory: '',
    numberOfUnits: '',
    predefinedAilments: ''
  });

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCategoryChange = (event) => {
    setFormData({ ...formData, requestCategory: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/requests/admin-add', formData);
      alert("Donor added Successfully.");
      navigate('/ad');
      setFormData({
        name: '',
        age: '',
        email: '',
        phoneNumber: '',
        bloodType: '',
        requestCategory: '',
        numberOfUnits: '',
        predefinedAilments: ''
      });
    } catch (error) {
      console.error('Error submitting request:', error);
    }
  };

  return (
    <><AppBar position="static" color='error'>
    <Container maxWidth="xl">
      <Toolbar disableGutters>
     
        <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
          <img src="\src\images\logo.png" alt="logo" style={{ height: 90, marginRight: -2 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/ad"
            sx={{
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Georgia',
              fontWeight: 1000,
              letterSpacing: '.2rem',
              color: 'inherit',
              textDecoration: 'none',
              fontSize: '1.75rem', 
              padding: '10px 20px'
            }}
          >
            BLOOD BANK
          </Typography>
        </Box>

        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          {/* Add your navigation links here if any */}
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Button  href="/arl"
            sx={{ mx: 1, color: 'white',fontSize: '1.25rem', padding: '10px 20px','&:hover': {
              backgroundColor: 'lightcoral',  }}}>
          <Link to={'/arl'} style={{ textDecoration: "none", color: "white" }}>
            Add Donors
            </Link>
        </Button>
        <Button  href="/ud"
            sx={{ mx: 1, color: 'white',fontSize: '1.25rem', padding: '10px 20px','&:hover': {
              backgroundColor: 'lightcoral',  }}}>
          <Link to={'/ud'} style={{ textDecoration: "none", color: "white" }}>
            Update/Delete
            </Link>
        </Button>
          <Button
            href="/rl"
            sx={{ mx: 1, color: 'white',fontSize: '1.25rem', padding: '10px 20px','&:hover': {
              backgroundColor: 'lightcoral', // Change to the desired color on hover
  }}}
          ><Link to={'/rl'} style={{ textDecoration: "none", color: "white" }}>
            View Requests
            </Link>
          </Button>
          <Button
            href="/"
            sx={{ mx: 1, color: 'white',fontSize: '1.25rem', padding: '10px 20px','&:hover': {
              backgroundColor: 'lightcoral', // Change to the desired color on hover
  } }}
          ><Link to={'/'} style={{ textDecoration: "none", color: "white" }}>
            Logout
            </Link>

          </Button>
        </Box>
      </Toolbar>
    </Container>
  </AppBar>
    <div style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>


      <Container maxWidth="sm" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', marginBottom: 20 }}>
        <Card sx={{ maxWidth: 1000, marginTop: 2, backgroundColor: 'rgba(240, 244, 248, 0.9)', borderRadius: 2, padding: 3, boxShadow: '0 0 10px rgba(0, 0, 0, 0.8)' }}>
          <CardContent>
            <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', marginBottom: 2, color: '#b30000', fontFamily: "Lucida Handwriting", fontWeight: 'bold' }}>
              Donor&nbsp;Addition&nbsp;Form
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                margin="normal"
                label="Name"
                variant="outlined"
                required
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
              <TextField
                fullWidth
                margin="normal"
                label="Age"
                variant="outlined"
                type="number"
                required
                name="age"
                value={formData.age}
                onChange={handleInputChange}
              />
              <TextField
                fullWidth
                margin="normal"
                label="Email ID"
                variant="outlined"
                type="email"
                required
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
              <TextField
                fullWidth
                margin="normal"
                label="Phone Number"
                variant="outlined"
                type="tel"
                required
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
              />
              <TextField
                fullWidth
                margin="normal"
                label="Blood Type"
                variant="outlined"
                required
                name="bloodType"
                value={formData.bloodType}
                onChange={handleInputChange}
              />
              <TextField
                fullWidth
                margin="normal"
                select
                label="Request Category"
                variant="outlined"
                required
                name="requestCategory"
                value={formData.requestCategory}
                onChange={handleCategoryChange}
              >
                <MenuItem value="Donor">Donor</MenuItem>
                {/* <MenuItem value="Receiver">Receiver</MenuItem> */}
              </TextField>
              {formData.requestCategory === 'Receiver' && (
                <TextField
                  fullWidth
                  margin="normal"
                  label="Number of Units"
                  variant="outlined"
                  type="number"
                  required
                  name="numberOfUnits"
                  value={formData.numberOfUnits}
                  onChange={handleInputChange}
                />
              )}
              <TextField
                fullWidth
                margin="normal"
                label="Predefined Ailments"
                variant="outlined"
                multiline
                rows={4}
                name="predefinedAilments"
                value={formData.predefinedAilments}
                onChange={handleInputChange}
              />
              <br />
              <Button variant="contained" color="primary" type="submit" fullWidth>
                Submit
              </Button>
            </form>
          </CardContent>
        </Card>
      </Container>
    </div>
    </>
  );
};

export default AdminRequestForm;
