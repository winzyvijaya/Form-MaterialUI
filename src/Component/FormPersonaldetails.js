import React,{Component} from 'react';
import { ThemeProvider } from '@mui/system';

import AppBar from '@mui/material/AppBar';
import TextField from '@mui/material/TextField';
import RaisedButton from '@mui/material/Button';

export class FormPersonalDetails extends Component{

    continue = e =>{
        e.preventDefault();
        this.props.nextStep();
    }
    back = e =>{
        e.preventDefault();
        this.props.prevStep();
    }
    render(){
        const { values, handleChange } = this.props;
        return(
            <ThemeProvider>
              <React.Fragment>
               <AppBar title="Enter Personal Details"></AppBar>
               <TextField 
               /*hintText*/placeholder="Enter Your Occupation"
               /*floatingLabelText*/label="Occupation"
               onChange={handleChange('occupation')}
               defaultValues={values.occupation}
               />
                <br/>
                <TextField 
               /*hintText*/placeholder="Enter Your City"
               /*floatingLabelText*/ label="City"
               onChange={handleChange('city')}
               defaultValues={values.city}
               />
               <br/>
               <TextField 
               /*hintText*/placeholder="Enter Your Bio"
               /*floatingLabelText*/label="Bio"
               onChange={handleChange('bio')}
               defaultValues={values.bio}
               />
               <br/>
               <RaisedButton
               label="Continue"
               placeholder="Continue"
               primary={true}
               style={styles.button}
               onClick={this.continue}
               ></RaisedButton>
               <RaisedButton
               label="Back"
               primary={false}
               style={styles.button}
               onClick={this.back}
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

export default FormPersonalDetails;