import React, { useEffect } from 'react';
import { Route , Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import firebase  from 'firebase/app';
import 'firebase/storage';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Profile from './components/Profile';
import DirectMessage from './components/DirectMessage';
import LandingPage from './components/LandingPage';
import PrivateRoute from './components/PrivateRoute';
import CreatePostModal from './components/modals/CreatePostModal';


import { setIsAuthenticated , loadUserData } from './actions/auth';
import { setImageURL , openCreatePostModal } from './actions/posts';

import './styles/app.scss';

const firebaseConfig = {
    apiKey: 'AIzaSyBiQFWX-K78Uj49N--rMF8z5piALyLWHXo',
    authDomain: 'ithink-fbc4c.firebaseapp.com',
    databaseURL: 'https://ithink-fbc4c.firebaseio.com',
    storageBucket: 'ithink-fbc4c.appspot.com'
}; 

const App = props => {
    useEffect(() => {
        if(localStorage.token) props.setIsAuthenticated(true);
        props.loadUserData();
        firebase.initializeApp(firebaseConfig);
    },[]);

    const uploadToCloud = (file) => {
        props.openCreatePostModal();
        const storage = firebase.storage();
        const fileName = file.name;
        const storageRef = storage.ref('/profileImages/'+ fileName);
        let uploadTask = storageRef.put(file);
        uploadTask.on('state_changed', ( snapshot ) => {
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
              case firebase.storage.TaskState.PAUSED: // or 'paused'
                console.log('Upload is paused');
                case firebase.storage.TaskState.RUNNING: // or 'running'
                break;
                console.log('Upload is running');
                break;
            }
          },( error ) => {
            console.log("Error while uploading => ",error);
          }, () => {
            storage.ref('profileImages').child(fileName).getDownloadURL()
            .then(fireBaseUrl => {
                props.setImageURL(fireBaseUrl);
            });
          });
    }

    const navBarElement = props.isAuthenticated ? <Navbar onImageUpload={(file) => uploadToCloud(file)}/> : '';
    const createPostModalElement = props.showCreatePostModal ? <CreatePostModal /> : '';
    return(
        <>
        {navBarElement}
        {createPostModalElement}
        <main className={'isht-main-cont'}>
            <Switch>
                <PrivateRoute path={'/profile'} component={Profile}/>
                <PrivateRoute path={'/direct'}  component={DirectMessage}/>
                <PrivateRoute path={'/home'}    component={Home}/>
                <Route exact path={'/'} render={() => <LandingPage />} />
                <Route path={'*'} render={() => "404 NOT FOUND"} />
            </Switch>
        </main>
        </>
    );
}

const mapStateToProps = state => {
    return {
        isAuthenticated : state.authReducer.isAuthenticated,
        showCreatePostModal : state.postReducer.showCreatePostModal
    };
}
    
export default connect(mapStateToProps,{
    setIsAuthenticated,
    loadUserData,
    setImageURL,
    openCreatePostModal
})(App);