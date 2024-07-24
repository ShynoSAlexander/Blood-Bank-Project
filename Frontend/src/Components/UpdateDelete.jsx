import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    Box, Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Typography, Paper, Button, TextField, AppBar, Container, Toolbar
} from '@mui/material';
import { Link } from 'react-router-dom';

const UpdateDelete = () => {
    const [donors, setDonors] = useState([]);
    const [editingDonor, setEditingDonor] = useState(null);
    const [editedData, setEditedData] = useState({});

    useEffect(() => {
        fetchDonors();
    }, []);

    const fetchDonors = async () => {
        try {
            const response = await axios.get('http://localhost:3001/donors', {
                headers: {
                    Authorization: localStorage.getItem('token')
                }
            });
            setDonors(response.data);
        } catch (error) {
            console.error('Error fetching donors:', error);
        }
    };

    const onDeleteDonor = async (id) => {
        try {
            await axios.delete(`http://localhost:3001/admin/donors/delete/${id}`);
            fetchDonors();
        } catch (error) {
            console.error('Error deleting donor:', error);
        }
    };

    const onUpdateDonor = async (id) => {
        try {
            await axios.put(`http://localhost:3001/admin/donors/update/${id}`, editedData);
            fetchDonors();
            setEditingDonor(null);
        } catch (error) {
            console.error('Error updating donor:', error);
        }
    };

    const handleEditClick = (donor) => {
        setEditingDonor(donor._id);
        setEditedData(donor);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSaveClick = () => {
        onUpdateDonor(editingDonor);
    };

    return (
        <div>
            <AppBar position="static" color='error'>
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
                            <Button
                                href="/arl"
                         
                                sx={{
                                    mx: 1, color: 'white', fontSize: '1.25rem', padding: '10px 20px', '&:hover': {
                                        backgroundColor: 'rgba(192, 192, 192, 0.4)',
                                    }
                                }}>
                                <Link to={'/arl'} style={{ textDecoration: "none", color: "white" }}>
                                    Add Donors
                                </Link>
                            </Button>
                            <Button
                                href="/ud"
                                sx={{
                                    mx: 1, color: 'white', fontSize: '1.25rem', padding: '10px 20px', '&:hover': {
                                        backgroundColor: 'rgba(192, 192, 192, 0.4)',
                                    }
                                }}>
                                <Link to={'/ud'} style={{ textDecoration: "none", color: "white" }}>
                                    Update/Delete
                                </Link>
                            </Button>
                            <Button
                                href="/rl"
                                sx={{
                                    mx: 1, color: 'white', fontSize: '1.25rem', padding: '10px 20px', '&:hover': {
                                        backgroundColor: 'rgba(192, 192, 192, 0.4)', // Change to the desired color on hover
                                    }
                                }}>
                                <Link to={'/rl'} style={{ textDecoration: "none", color: "white" }}>
                                    View Requests
                                </Link>
                            </Button>
                            <Button
                                href="/"
                                sx={{
                                    mx: 1, color: 'white', fontSize: '1.25rem', padding: '10px 20px', '&:hover': {
                                        backgroundColor: 'rgba(192, 192, 192, 0.4)', // Change to the desired color on hover
                                    }
                                }}>
                                <Link to={'/'} style={{ textDecoration: "none", color: "white" }}>
                                    Logout
                                </Link>

                            </Button>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>

            <Box sx={{ border: '2px solid #000', borderRadius: '8px', marginTop: '1rem', padding: '1rem', backgroundColor: '#f5f5f5' }}>
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
                <TableContainer component={Paper}>
                    <Table aria-label="Donor table">
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    <Typography sx={{ fontWeight: 'bold', color: '#b30000' }}>Name</Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography sx={{ fontWeight: 'bold', color: '#b30000' }}>Email</Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography sx={{ fontWeight: 'bold', color: '#b30000' }}>Phone Number</Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography sx={{ fontWeight: 'bold', color: '#b30000' }}>Blood Type</Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography sx={{ fontWeight: 'bold', color: '#b30000' }}>Predefined Ailments</Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography sx={{ fontWeight: 'bold', color: '#b30000' }}>Actions</Typography>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {donors.map((donor) => (
                                <TableRow key={donor._id} sx={{ '&:nth-of-type(odd)': { backgroundColor: '#f9f9f9' } }}>
                                    <TableCell>
                                        {editingDonor === donor._id ? (
                                            <TextField
                                                name="name"
                                                value={editedData.name}
                                                onChange={handleInputChange}
                                                sx={{ minWidth: '120px' }}
                                            />
                                        ) : (
                                            donor.name
                                        )}
                                    </TableCell>
                                    <TableCell>
                                        {editingDonor === donor._id ? (
                                            <TextField
                                                name="email"
                                                value={editedData.email}
                                                onChange={handleInputChange}
                                                sx={{ minWidth: '200px' }}
                                            />
                                        ) : (
                                            donor.email
                                        )}
                                    </TableCell>
                                    <TableCell>
                                        {editingDonor === donor._id ? (
                                            <TextField
                                                name="phoneNumber"
                                                value={editedData.phoneNumber}
                                                onChange={handleInputChange}
                                                sx={{ minWidth: '120px' }}
                                            />
                                        ) : (
                                            donor.phoneNumber
                                        )}
                                    </TableCell>
                                    <TableCell>
                                        {editingDonor === donor._id ? (
                                            <TextField
                                                name="bloodType"
                                                value={editedData.bloodType}
                                                onChange={handleInputChange}
                                                sx={{ minWidth: '80px' }}
                                            />
                                        ) : (
                                            donor.bloodType
                                        )}
                                    </TableCell>
                                    <TableCell>
                                        {editingDonor === donor._id ? (
                                            <TextField
                                                name="predefinedAilments"
                                                value={editedData.predefinedAilments}
                                                onChange={handleInputChange}
                                                sx={{ minWidth: '200px' }}
                                            />
                                        ) : (
                                            donor.predefinedAilments
                                        )}
                                    </TableCell>
                                    <TableCell>
                                        {editingDonor === donor._id ? (
                                            <Button variant="contained" color="primary" onClick={handleSaveClick}>
                                                Save
                                            </Button>
                                        ) : (
                                            <>
                                                <Button variant="contained" color="primary" onClick={() => handleEditClick(donor)}>
                                                    Update
                                                </Button>
                                                &nbsp;&nbsp;&nbsp;
                                                <Button variant="contained" color="error" onClick={() => onDeleteDonor(donor._id)}>
                                                    Delete
                                                </Button>
                                            </>
                                        )}
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

export default UpdateDelete;

