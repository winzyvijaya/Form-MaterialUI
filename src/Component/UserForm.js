import React,{Component} from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonaldetails';
import Confirm from './Confirm';
import Success from './Success';
export class UserFrom extends Component{
    state={
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        occupation: '',
        city: '',
        bio: ''
    }

    //procceed to next step
    nextStep =()=>{
        const { step }= this.state;
        this.setState({
            step:step + 1 
        });
    }
    //Go to the previouse step
    prevStep =()=>{
        const { step }= this.state;
        this.setState({
            step:step - 1 
        });
    }
    //handle filds change
    handleChange = input => e =>{
        this.setState({[input]: e.target.value});
    }

    render(){
        const { step } = this.state;
        const{ firstName, lastName, email, occupation, city, bio}= this.state;
        const values = {firstName, lastName, email, occupation, city,bio}

        switch(step){
            case 1:
                return(
                    <FormUserDetails 
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values}
                    />
                )
                case 2:
                    return(
                        <FormPersonalDetails 
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}v
                        />
                    )
                    case 3:
                        return(
                            <Confirm 
                            nextStep={this.nextStep}
                            prevStep={this.prevStep}
                        
                            values={values}v
                            />
                        )
                    case 4:
                    return(
                        <Success></Success>
                    )
        }
        return(
            <div>

            </div>
        )
    }
}
export default UserFrom;