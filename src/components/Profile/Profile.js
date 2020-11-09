import React from 'react';
import './Profile.scss';


const Profile = () => {
    return(
        <div className = "background-profile">
            <div>Email<input /></div>
            <div>NickName<input /></div>
            <div>Password<input /></div>
            <div>Confrim Password<input /></div>
        </div>
    )
}

export default Profile