import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    Box, Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Typography, Paper, Button,AppBar,Container,Toolbar
} from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';


const StyledTableCell = styled(TableCell)({
    fontWeight: 'bold',
    color: '#b30000',
    backgroundColor: '#f0f0f0',
});

const StyledButton = styled(Button)({
    borderRadius: '20px',
    textTransform: 'none',
});

const ReceiversList = () => {
    const [receivers, setReceivers] = useState([]);

    useEffect(() => {
        fetchReceivers();
    }, []);

    const fetchReceivers = async () => {
        try {
            const response = await axios.get('http://localhost:3001/receivers', {
                headers: {
                    Authorization: localStorage.getItem('token')
                }
            });
            setReceivers(response.data);
        } catch (error) {
            console.error('Error fetching receivers:', error);
        }
    };

    const onApproveRequest = async (id) => {
        try {
            // Logic to approve the request
            await axios.put(`http://localhost:3001/admin/requests/approve/${id}`);
            alert("Acceptance Email has been sent to the user");
            fetchReceivers(); // Refresh receiver list after approval
        } catch (error) {
            console.error('Error approving request:', error);
        }
    };

    const onRejectRequest = async (id) => {
        try {
            // Logic to reject the request
            await axios.delete(`http://localhost:3001/admin/requests/reject/${id}`);
            alert("Rejection Email has been sent");
            // Remove the rejected request from the state
            setReceivers(receivers.filter(receiver => receiver._id !== id));
        } catch (error) {
            console.error('Error rejecting request:', error);
        }
    };
    const onDeleteDonor = async (id) => {
        try {
            await axios.delete(`http://localhost:3001/admin/donors/delete/${id}`);
            fetchReceivers(); 
        } catch (error) {
            console.error('Error deleting donor:', error);
        }
    };

    return (
        <div><AppBar position="static" color='error'>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
         
            <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
              <img src="\src\images\logo.png" alt="logo" style={{ height: 90, marginRight: -2 }} />
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
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
            <video autoPlay loop muted style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        zIndex: -1,
      }}>
        <source
          src="/src/images/video.webm"
          type="video/mp4"
        />
      </video>
            <br />
            <Typography
  variant="h4"
  component="h2"
  sx={{
    textAlign: 'center',
    mb: 4,
    color: 'rgb(220, 20, 60)', // Indian Red color
    fontFamily: 'Lucida Handwriting', // Font family change
    fontSize:'50px',
    fontWeight:'bold',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
  }}
>
  All Requests
</Typography>
            <Box sx={{ border: '2px solid #000', borderRadius: '8px', padding: '1rem', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
                <TableContainer component={Paper} sx={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
                    <Table aria-label="Receiver table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Name</StyledTableCell>
                                <StyledTableCell>Email</StyledTableCell>
                                <StyledTableCell>Phone Number</StyledTableCell>
                                <StyledTableCell>Category</StyledTableCell>
                                <StyledTableCell>Blood Type</StyledTableCell>
                                <StyledTableCell>Number <br />of Units Required</StyledTableCell>
                                <StyledTableCell>Predefined Ailments</StyledTableCell>
                                <StyledTableCell>Current Status</StyledTableCell>
                                <StyledTableCell>Actions</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {receivers.map((receiver) => (
                                <TableRow key={receiver._id}>
                                    <TableCell>{receiver.name}</TableCell>
                                    <TableCell>{receiver.email}</TableCell>
                                    <TableCell>{receiver.phoneNumber}</TableCell>
                                    <TableCell>{receiver.requestCategory}</TableCell>
                                    <TableCell>{receiver.bloodType}</TableCell>
                                    <TableCell>{receiver.numberOfUnits}</TableCell>
                                    <TableCell>{receiver.predefinedAilments}</TableCell>
                                    <TableCell>{receiver.approved ? 'Approved' : 'Pending'}</TableCell>
                                    <TableCell>
                                        <StyledButton variant="contained" color="primary" onClick={() => onApproveRequest(receiver._id)}>
                                            Approve
                                        </StyledButton>
                                        &nbsp;&nbsp;&nbsp;
                                        <StyledButton variant="contained" color="secondary" onClick={() => onRejectRequest(receiver._id)}>
                                            Reject
                                        </StyledButton>
                                        &nbsp;&nbsp;
                                        <StyledButton variant="contained" color="error" onClick={() => onDeleteDonor(receiver._id)}>
                                            Delete
                                        </StyledButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </div>
    );
};

export default ReceiversList;
