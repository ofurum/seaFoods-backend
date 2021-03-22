import React from 'react';
import './sign-in.styles.css';
import { Link } from 'react-router-dom'

class Signin extends React.Component {
    state={
        email: "",
        pwd: ""
    }
    handleChange =(e)=>{
        const {name,value}= e.target
        this.setState({[name]:value})
    }
    handleSubmit =(e)=>{

    }
    render(){
        return(
            <div>
                <div className='signin'>
                   
                        <h2>I am already registered </h2>
                        <h5>   Authorization </h5>                    
                    <form onSubmit = {this.handleSubmit}>
                        <label>E-Mail</label>
                            <input type="email" name='email' placeholder='E-Mail...' required onChange={this.handleChange}/>
                        <label>Password</label>
                            <input type="password" name='pwd' placeholder='password...' required onChange={this.handleChange}/>
                        <button className="btn1" onSubmit={this.handleSubmit}>SIGN IN</button>
                        <h5>Dont have an Accont <Link className='signUp-link' to='/signup'>SIGN UP</Link></h5>
                    </form>
                </div>
            </div>
        )
    }
}

export default Signin