import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm } from '../../modules/auth';
import AuthForm from '../../components/auth/AuthForm';

const Register = () => {
    const dispatch = useDispatch();
    const {form} = useSelector(({auth}) => ({
        form : auth.Register
    }));
    const onChange = e => {
        const {value, name} = e.target;
        dispatch(
            changeField({
                form: 'Register',
                key: name,
                value
            })
        );
    };
    const onsubmit = e => {
        e.preventDefault();
    };

    useEffect(() => {
        dispatch(initializeForm('Register'))
    }, [dispatch]);
    return(
        <AuthForm
            type = "Register"
            form = {form}
            onChange = {onChange}
            onsubmit = {onsubmit}
        />
    )
}

export default Register;