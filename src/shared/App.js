import React from 'react';
import {Route} from 'react-router-dom';
import {Main, signUp, Forgot, profile} from './../pages/index'

const App = () => {
    return(
        <div>
            <Route path={"/main"/ "/"} component={Main} />
            <Route path="/Join" component={signUp} />
            <Route path="/Forgot" component={Forgot} />
            <Route path = '/profile' component = {profile}/>
        </div>
    )
};
export default App;