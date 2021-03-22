import React from 'react';
import './sign-up.styles.css';

class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    render(){
        return(
            <div className='sign-up'>
                <h2 className='title'>I do not have an account</h2>
                <span>sign up with yor email or password</span>
                <form onSubmit = {this.handleSubmit}>
                        <label className="lbn">Name</label>
                            <input type="text" name='displayName' placeholder='Name...' required onChange={this.handleChange}/>
                        <label className='lbn'>E-Mail</label>
                            <input type="email" name='email' placeholder='E-Mail...' required onChange={this.handleChange}/>
                        <label className='lbn'>Password</label>
                            <input type="password" name='pwd' placeholder='password...' required onChange={this.handleChange}/>
                        <label>Confirm Password</label>
                            <input type="password" name='confirmPassword' placeholder='password...' required onChange={this.handleChange}/>
                        <button className="btn1" onSubmit={this.handleSubmit}>SIGN IN</button>
                    </form>


                {/* <form className='sign-up-form' onSubmit={this.handleSubmit}>
                <label>NAME</label>
                    <input 
                        type="text"
                        name="displayName"
                        // value={displayName}
                        onChange={this.handleChange}
                        required
                        />
                        
                        <label>EMAIL</label>
                    <input 
                        type="email"
                        name="email"
                        // value={email}
                        onChange={this.handleChange}
                        required
                        />
                    
                    <label>PASSWORD</label>
                    <input 
                        type="password"
                        name="password"
                        // value={password}
                        onChange={this.handleChange}
                        required
                        />
                        
                     <label>CONFIRM PASSWORD</label>
                    <input 
                        type="password"
                        name="confirmPassword"
                        // value={confirmPassword}
                        onChange={this.handleChange}
                        required
                        />
                        
                    <button type='submit'>SIGN UP</button>
                </form> */}
             </div>
        )
        
    }
}
export default SignUp