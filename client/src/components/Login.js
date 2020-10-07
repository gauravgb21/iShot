import React , { useState } from 'react';
import { connect } from 'react-redux';

import { Redirect } from 'react-router-dom';

const Login = ({ isAuthenticated , onLogin , onToggle }) => {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');

    const handleInputChange = (e) => {
        if(e.target.name === 'username')setUsername(e.target.value);
        else setPassword(e.target.value);
    }

    if(isAuthenticated){
        return <Redirect to={'/home'} />
    }
    
    return(
        <div className={'isht-landing-page-login'}>
            <div className={'isht-icon-cont'}>iShot</div>
            <form className={'isht-landing-page-login-form'}>
                <input type='text' name='username' placeholder='Username' className={'input-el'} onChange={(e) => handleInputChange(e)}/>
                <input type='password' name='password' placeholder='Password' className={'input-el'} onChange={(e) => handleInputChange(e)}/>
                <button onClick={(e) => {
                    e.preventDefault();
                    onLogin({username,password});
                }}>Log In</button>
            </form>
            <div className={'isht-login-form-footer'}>Don't have an account ? <span onClick={() => onToggle()}>Sign up</span></div>
        </div>
    );
}


const mapStateToProps = state => {
    return {
        isAuthenticated : state.authReducer.isAuthenticated
    };
}
    
export default connect(mapStateToProps,{})(Login);