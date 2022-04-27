import { AppBar, Button, colors, Grid, TextField, Toolbar, Typography } from '@material-ui/core'
import { lightBlue } from '@material-ui/core/colors'
import React, { Component } from 'react'

export default class Supportpage extends Component {
  render() {
    return (
        <div style={{padding:55,backgroundColor:"lightblue"}}>
            <Grid container style={{padding:50}}>
                <Grid item xs={12} sm={6} md={6} lg={6} xl={6} style={{padding:50,border: '1px solid black',backgroundColor:"white"}}>
                    <div className='header'>
                        <h1 align='center'>We'd love to hear from you</h1>
                    </div>
                    <h4>whether you want to try our products or have a technical question - we have it all covered</h4>
                    <TextField style={{margin:4}} type='text' variant='outlined' label='Enter you Name' margin='normal'/>
                    <TextField  style={{margin:4}} type='text' variant='outlined' label='Enter you Email ID' margin='normal'/>
                    <TextField style={{margin:4}} type='password' variant='outlined' label='Message Type' margin='normal' placeholder='Contact a Tech geek' fullWidth />                
                    <TextField  style={{margin:4}} type='password' variant='outlined' label='Message' multiline={true} rows={4} margin='normal' fullWidth />
                    <Button style={{float:'right'}} color='primary' variant='contained' margin='normal' type='submit' >Send</Button>     
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6} xl={6} style={{padding:50,border: '1px solid black',backgroundColor:"white"}}>
                    <div className='header'>
                        <h1 align='center'>Contact Information</h1>
                    </div>
                    <img src="/image.jpg" alt="image"/>
                    <Typography style={{color:"red"}}>Address</Typography>
                    <Typography>UK</Typography>
                    <Typography>Uk Address</Typography>
                    <Typography>India</Typography>
                    <Typography>India Address</Typography>
                    <Typography style={{color:"red"}}>Number</Typography>
                    <Typography>09947123456</Typography>
                    <Typography style={{color:"red"}}>Email</Typography>
                    <Typography>contact@lms.com</Typography>
                </Grid>
            </Grid>
        </div>        
    )
  }
}
