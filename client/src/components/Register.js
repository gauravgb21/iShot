import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const Register = ({ isAuthenticated , onSubmit , onToggle }) => {
    const [name,setName] = useState('');
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');

    const handleInputChange = (e) => {
        if(e.target.name === 'username') setUsername(e.target.value);
        else if(e.target.name == 'name') setName(e.target.value);
        else setPassword(e.target.value);
    }

    if(isAuthenticated){
        return <Redirect to={'/home'} />
    }

    return(
        <div className={'isht-landing-page-register'}>
            <div className={'isht-icon-cont'}>iShot</div>
                <form className={'isht-landing-page-register-form'}>
                    <input type='text'  name='name' placeholder='Full Name' className={'input-el'} onChange={(e) => handleInputChange(e)}/>
                    <input type='text'  name='username' placeholder='Username' className={'input-el'} onChange={(e) => handleInputChange(e)}/>
                    <input type='password'  name='password' placeholder='Password' className={'input-el'} onChange={(e) => handleInputChange(e)}/>
                    <button onClick={(e) => {
                        e.preventDefault();
                        onSubmit({name,username,password});
                    }}>Sign Up</button>
                </form>
            <div className={'isht-register-form-footer'}>Have an account ? <span onClick={() => onToggle()}>Log in</span></div>
        </div>
    );
}


const mapStateToProps = state => {
    return {
        isAuthenticated : state.authReducer.isAuthenticated
    };
}
    
export default connect(mapStateToProps,{})(Register);