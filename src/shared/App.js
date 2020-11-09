import React from 'react';
import {Route} from 'react-router-dom';
import {Main, signUp, Forgot, Profile} from './../pages/index'

const App = () => {
    return(
        <div>
            <Route path={"/main"/ "/"} component={Main} />
            <Route path="/Join" component={signUp} />
            <Route path="/Forgot" component={Forgot} />
            <Route path = '/profile' component = {Profile}/>
        </div>
    )
};
export default App;