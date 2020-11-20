import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './SignUp.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
const axios = require('axios');


const SignUp = () => {
    let history = useHistory();
    const [email, setEmail] = useState('');
    const [emailBlcok, setEmailBlock] = useState(false);
    const [auth, setAuth] = useState('');
    const [authBlock, setAuthBlock] = useState(false);
    const [nickname, setNickname] = useState('')
    const [password, setPassword] = useState('');
    const [checkPassword, setCheckPassword] = useState('');
    

    const handleSignUp = () => {
        history.push({
            pathname: "/",
        })
    }

    const handleMain = () => {
        history.push({
            pathname: "/",
        })
    }
    const handleAuth = () => {
        if(email !== ''){ // 이메일 체크
            axios.get(`http://3.35.169.186:5000/api/auth/idcheck/${email}`)
            .then(res =>
                axios.post(`http://3.35.169.186:5000/api/auth/emailsend`, {
                    email : email
                })
                .then(res => {
                    setEmailBlock(true);
                    console.log(res);
                })
                .catch(error =>{
                    console.log(error)
                })
            )      
            .catch(error => {
                alert("이미 사용중인 이메일입니다");
                setEmail('')
                console.log(error);
            })
        }
    }
    const handleCheckEmail = () => {
        if(auth != ''){ // 코드 체크
            axios.get(`http://3.35.169.186:5000/api/auth/emailcheck?id=${email}&code=${authentication}`, {
                id : email,
                code : auth
            })
            .then(res => {
                setAuthenticationBlock(true);
                console.log(res);
            })
            .catch(error => {
                setAuthentication('');
                alert('잘못된 인증번호입니다');
                console.log(error);
            })
        }
    }


    
    return(
        <div className={cx('signup-back')}>
            <div className={cx('signup-header')}>
                <div className={cx("signup-logo")} onClick={() => handleMain()}>Bagel</div>
            </div>
            <div className={cx('signup-contents')}>
                <div className={cx('signup-title')}>Sign up</div>
                <div className={cx('signup-email')}>
                    { emailBlock ?
                        <input style={{color: "gray"}} className={cx('signup-email-input')} value={email} readOnly/>
                        :
                        <input className={cx('signup-email-input')} onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Email" type="email"/>
                    }
                    <button className={cx('signup-send-email')} onClick = {() => handleAuth()}>Send</button>
                </div>
                <div className={cx('signup-authentication')}>
                    <input className={cx('signup-authentication-input')} onChange = {() => setAuth()} placeholder="Authentication"/>
                    <button className={cx('signup-confirm-authentication')} onClick = {() => handleCheckEmail()}>Confirm</button>
                </div>
                <input className={cx('signup-nickname')} onChange = {() => setNickname} placeholder="Nickname"/>
                <input className={cx('signup-password')} placeholder="Password" type="password" onChange = {() => setPassword()}/>
                <input className={cx('signup-confirm-password')} placeholder="Confirm Password" onChange = {() => setCheckPassword()} type="password"/>
                <button className={cx('signup-submit-button')} onClick={() => handleSignUp()}>Sign up</button>
            </div>
            <div className={cx('signup-view')}></div>
            <div className={cx('signup-opacity')}></div>
        </div>
    );
    
}

export default SignUp; 