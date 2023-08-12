import {useForm} from 'react-hook-form';
import DigiheyLogo from '../assets/DigiheyLogo.svg';
import Button from '../components/Button';
import {LoginForm} from '../types';
import {loginPageValidationSchema} from '../validations/loginPageValidation';
import {zodResolver} from '@hookform/resolvers/zod';
import {login} from '../services/userServices';
import {useNavigate} from 'react-router-dom';
import {useContext, useState} from 'react';
import {AuthContext} from '../context/authContext';

const LoginPage = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: {errors},
    } = useForm<LoginForm>({resolver: zodResolver(loginPageValidationSchema), defaultValues: {email: '', password: ''}});
    const {setIsAuthenticated} = useContext(AuthContext);
    const watchFields = watch();
    const navigate = useNavigate();
    const [error, setError] = useState<boolean>(false);

    const isDisabled = !watchFields.email || !watchFields.password;

    const onSubmit = async ({email, password}: LoginForm) => {
        await login({email, password}).then((res) => {
            if (res?.status === 204 || res?.status === 200) {
                localStorage.setItem('token', res.data.token);
                setIsAuthenticated(true);
                return navigate('/encode');
            }

            setError(true);
        });
    };

    return (
        <div className="p-login">
            <div className="p-login__logo">
                <img src={DigiheyLogo} alt="digihey logo" />
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="example@example.hr" {...register('email')} />
                {errors.email && <span>{errors.email.message}</span>}
                <input type="password" placeholder="Password" {...register('password')} />
                {errors.email && <span>{errors.password?.message}</span>}
                {error && <span>Wrong credentials</span>}
                <Button type="submit" disabled={isDisabled}>
                    Login
                </Button>
            </form>
        </div>
    );
};

export default LoginPage;
