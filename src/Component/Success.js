import React,{Component} from 'react';
import { ThemeProvider } from '@mui/system';

import AppBar from '@mui/material/AppBar';

//import { ListItem } from '@mui/material';

export class Success extends Component{

    continue = e =>{
        e.preventDefault();
        this.props.nextStep();
    }
    back = e =>{
        e.preventDefault();
        this.props.prevStep();
    }
    render(){
        return(
            <ThemeProvider>
              <React.Fragment>
               <AppBar title="Successfull"></AppBar>
               <h1>Thank you for your Submission</h1>
               <p>You will get email regarding next step</p>
              </React.Fragment>
            </ThemeProvider>
        )
    }
}


export default Success;