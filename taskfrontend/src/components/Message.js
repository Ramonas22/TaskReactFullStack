import React, { useEffect, useState} from 'react';
import TextField from '@mui/material/TextField';
import { Button, Container, makeStyles, Paper } from '@material-ui/core';

const useStyles= makeStyles((theme) => ({
    root:{
        '& > *':{
            margin: theme.spacing(1),
        },
    },
}));

export default function Message() {
    const paperStyle ={padding:"50px 20px",width:600,margin:"20px auto" }
    const[message,setMessage]=useState('')
    const[messages,getMessage]=useState([])
    const classes = useStyles();

    const handleClick=(e) =>{
        e.preventDefault()
        const messageSend = {message}
        console.log(messageSend)
        fetch("http://localhost:8080/message/add",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(message)

        }).then(()=>{
            console.log("Message sent")
        })
        .catch(err=> {
            console.log(err.message);
        })
    }

    useEffect(()=>{
    fetch('https://localhost:8080/message/getAll')
        .then(res=> {
            console.log(res)
            return res.json()})
        .then((result)=>{
            getMessage(result);
        }
        )
        .catch(err =>{
            console.log(err.message);
        })
    },[])
        
  return (
    
    <Container>
        <Paper elevation={3} style={paperStyle}>
                <hi style={{color:"blue"}}><u>Add message</u></hi>

            <from className={classes.root} noValidate autoComplete="off">
                <TextField id='message-input' label="Enter your message here" variant='outlined' fullWidth
                value={message}
                onChange={(e) => setMessage(e.target.value)}/>
                <Button variant="contained" color='secondary' onClick={handleClick}>
                    Send message
                </Button>
            </from>
        </Paper>
        <h1>Messages</h1>
        <Paper elevation={3} style={paperStyle}>
        {messages.map(messages=>(
            <Paper elevation={6} style={{margin:"10px",padding:"15px",textAlign:"left"}} key={messages.id} >
                Id:{messages.id}
                Name:{messages.summary}
                Time:{messages.time}
                </Paper>
        ))}
        </Paper>

    </Container>
  )

}
