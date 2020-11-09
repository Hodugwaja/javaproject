import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm } from '../../modules/auth';
import MainPage from '../../components/MainPage/MainPage';

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
        <MainPage
            type = "Register"
            form = {form}
            onChange = {onChange}
            onsubmit = {onsubmit}
        />
    )
}

export default Register;