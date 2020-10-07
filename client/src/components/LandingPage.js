import React , {useState} from 'react';
import { connect } from 'react-redux';
import '../styles/landingpage.scss';

import Login from './Login';
import Register from './Register';

import { loginUser , registerUser } from '../actions/auth';

const LandingPage = props => {
    const [showLogin,setShowLogin] = useState(true);

    const handleFormSubmit = payload => {
        console.log("showLogin is ",showLogin);
        console.log("Payload is ",payload);
        if(showLogin) props.loginUser(payload);
        else props.registerUser(payload);
    }

    const landingPageElement = showLogin ? <Login onToggle={() => setShowLogin(!showLogin)} onLogin={(payload) => handleFormSubmit(payload)}/> : <Register onToggle={() => setShowLogin(!showLogin)} onSubmit={(payload) => handleFormSubmit(payload)}/>; 
    return(
        <div className={'isht-landing-page-cont'}>
            {landingPageElement}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        ...state
    }
}

export default connect(mapStateToProps,{
    loginUser,
    registerUser
})(LandingPage);