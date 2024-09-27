import React,{Component} from 'react';
import { ThemeProvider } from '@mui/system';

import AppBar from '@mui/material/AppBar';
import TextField from '@mui/material/TextField';
import RaisedButton from '@mui/material/Button';

export class FormUserDetails extends Component{

    continue = e =>{
        e.preventDefault();
        this.props.nextStep();
    }
    render(){
        const { values, handleChange } = this.props;
        return(
            <ThemeProvider>
              <React.Fragment>
               <AppBar title="Enter User Details"></AppBar>
               <TextField 
               placeholder="Enter Your First Name"
               label="First Name"
               onChange={handleChange('firstName')}
               defaultValues={values.firstName}
               />
                <br/>
                <TextField 
               placeholder="Enter Your Last Name"
               label="Last Name"
               onChange={handleChange('lastName')}
               defaultValues={values.lastName}
               />
               <br/>
               <TextField 
               placeholder="Enter Your Email"
               label="Email"
               onChange={handleChange('email')}
               defaultValues={values.email}
               />
               <br/>
               <RaisedButton
               label="Continue"
               placeholder="Continue"
               primary={true}
               style={styles.button}
               onClick={this.continue}
               ></RaisedButton>
              </React.Fragment>
            </ThemeProvider>
        )
    }
}
const styles={
    button:{
        margin: 15,
        backgroundColor: 'blue',
        height: 30
        
    }
   
}

export default FormUserDetails;