import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import TextField from '@mui/material/TextField';
import { React, useState } from 'react';
// import Visibility from '@mui/icons-material/Visibility';
// import AiFillEyeInvisible from '@mui/icons-material/VisibilityOff';
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

import { styled } from '@mui/system';
import { Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../slice/userSlice/UserSlice';
import { useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import { toast, ToastContainer } from 'react-toastify';
const MyInput = styled(FormControl)({
    margin: '20px 0',
});
const MyButon = styled(Button)({
    margin: '10px 0',
    width: "200px"
});
const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const checkValidForm = () => {
        if(username.length<5 || password.length<7) {
            toast.error("valid username or password");
            return false;
        }
        return true;
    }
    const handleLogin = async () => {
        if(checkValidForm()) {
            try {

                const value = { username, password }
                // const value = {"name":"phankimsinh20@gmail.com","username":"sadsadasd","email":"sinh232@gmail.com","password":"8zavmBfnV7kPDmK","roles":[]}
                const action = login(value);
                const resultAction = await dispatch(action);
                const respond = unwrapResult(resultAction);
                if (respond.username === username) {
                    setPassword("");
                    setUsername("");
                    toast.success("susscesfully");
                    navigate("/");
                } else {
                    toast.error("login error");
                }
                // console.log(respond);
                return null;
            } catch (error) {
                toast.error("password or username is false,please enter again")
                // console.log("loi :" + error)
            }
        }
    }
    return (
        <div>
            <ToastContainer />
            <section className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <Link to={"/"} className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                        <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo"></img>
                        Kim Sinh shop
                    </Link>
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-3xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Sign in to your account
                            </h1>
                        </div>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                            <div>
                                <FormControl fullWidth variant="outlined">
                                    <TextField
                                        label="user name"
                                        id="outlined-start-adornment"
                                        fullWidth
                                        onInput={(e) => setUsername(e.target.value)}
                                    />
                                </FormControl>
                                <MyInput fullWidth variant="outlined">
                                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                    <OutlinedInput
                                        onInput={(e) => setPassword(e.target.value)}
                                        id="outlined-adornment-password"
                                        type={showPassword ? 'text' : 'password'}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                >
                                                    {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        label="Password"
                                    />
                                </MyInput>
                                <div className='flex justify-around'>
                                    <MyButon onClick={handleLogin} variant="contained">Login</MyButon>
                                    <MyButon variant="contained">forget password</MyButon>
                                </div>
                                <div className='text-center my-4'>
                                    <Link to={"/auth/signup"}>
                                        you not have account ? register now !
                                    </Link>
                                </div>
                            </div>
                        </Box>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Login