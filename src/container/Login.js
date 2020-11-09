import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm } from '../modules/auth';
import AuthForm from '../components/MainPage/MainPage';

const Login = () => {
    const dispatch = useDispatch();
    const {form} = useSelector(({auth}) => ({
        form : auth.Login
    }));
    const onChange = e => {
        const {value, name} = e.target;
        dispatch(
            changeField({
                form: 'Login',
                key: name,
                value
            })
        );
    };
    const onsubmit = e => {
        e.preventDefault();
    };

    useEffect(() => {
        dispatch(initializeForm('Login'))
    }, [dispatch]);
    return(
        <AuthForm
            type = "Login"
            form = {form}
            onChange = {onChange}
            onsubmit = {onsubmit}
        />
    )
}

export default Login;