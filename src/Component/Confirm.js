import React,{Component} from 'react';
import { ThemeProvider } from '@mui/system';
import ListItemText from '@mui/material/ListItemText';
import AppBar from '@mui/material/AppBar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import RaisedButton from '@mui/material/Button';
//import { ListItem } from '@mui/material';

export class FormUserDetails extends Component{

    continue = e =>{
        e.preventDefault();
        this.props.nextStep();
    }
    back = e =>{
        e.preventDefault();
        this.props.prevStep();
    }
    render(){
        const { values:{firstName, lastName, 
            email,occupation,city,bio} } = this.props;
        return(
            <ThemeProvider>
              <React.Fragment>
               <AppBar title="Confirm User Data"></AppBar>
              
               <List>
                <ListItem>
                    <ListItemText
                primary="First Name"
                secondary={ firstName}
                />
                </ListItem>
                <ListItem>
                <ListItemText   
                primary="Last Name"
                secondary={ lastName}
                />
                </ListItem>
                <ListItem>
                    <ListItemText
                    primary="Email"
                    secondary={ email}
                    />
                </ListItem>
                <ListItem>
                <ListItemText
                primary="Occupation"
                secondary={ occupation}
                /> 
                </ListItem>
                <ListItem>
                    <ListItemText
                     primary="City"
                     secondary={ city}
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                    primary="Bio"
                    secondary={bio}
                    />
                </ListItem>
               </List>
               <br/>
               <RaisedButton
               label="Confirm & Continue"
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

export default FormUserDetails;