import React,{useState} from 'react';
import {Grid, Box, Typography, TextField, Modal, Button} from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PublicIcon from '@mui/icons-material/Public';

const Form = () => {
    const [open, setOpen] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');


    const handleOpen = () => {
        console.log(name, email, message);
        if(name === '' || email === '' || message === ''){
            alert("Please do fill the data");
        } else {
            setOpen(true);
        }       
    };

    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };

  return (
   <div>
     <Grid container>
        <Grid item my={2} mx={2} xl={4} xs={12}>
            <Box mx={7}>
                <Box lineHeight={0.1} my={5}>
                <p style={{color:"gray", fontWeigh: "bold", fontFamily:"serif" }}>Gaurav Garg</p>
                <h2>15 Minute Meeting</h2> 
                </Box>
                 <p><AccessTimeIcon/> 15 min</p>
                <p> <CalendarMonthIcon/> 9:30am - 9:45am, Friday, September 16, 2022</p>
                <p><PublicIcon/> Indian Standard Time</p>
            </Box>
        </Grid>
        <Grid item xl={6} m={2} xs={12}>
            <Box>
                <h3>Enter Details</h3>
            </Box>
            <Box my={2}>
                    <TextField m={2} label='Name' type='text' variant='outlined' fullWidth required 
                    onChange={e => setName(e.target.value)}/>
            </Box>
            <Box my={2}>
            <TextField label='Email' type='email' variant='outlined' fullWidth required
            onChange={e => setEmail(e.target.value)}/>
            </Box>
            <Box my={2}>
                <Button variant='outlined'>add Guests</Button>
            </Box>
            <Box my={2}>
                    <TextField label='Please share anything that will help us to improve' 
                    multiline
                    variant='outlined' 
                    fullWidth required
                    rows = {4}
                    onChange={e=>setMessage(e.target.value)}
                    />
            </Box>
            <Box my={2}>
                <Button variant='contained' color='primary' onClick={handleOpen}>Shedule Event</Button>
                <Modal
                    open={open}
                     onClose={handleClose}
                 >
                 <Box sx={style}>
                     <Typography variant="h6" component="h2">
                            Your Details
                     </Typography>
                     <hr/>
                      <Typography>
                          Name: {name}
                     </Typography>
                     <Typography>
                        Email: {email}
                     </Typography>
                     <Typography>
                        Message: {message}
                     </Typography>
                     <hr/>
                     <Typography color='green'>Thank you For Sheduling The Meeting</Typography>
                 </Box>
             </Modal>
            </Box>
        </Grid>
  </Grid>
   </div>
  )
}

export default Form;