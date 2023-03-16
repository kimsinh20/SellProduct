import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/system';
import { unwrapResult } from '@reduxjs/toolkit';
import { React, useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { register } from './../userSlice/UserSlice';


const MyInput = styled(FormControl)({
    margin: '20px 0',
});
const MyButon = styled(Button)({
    margin: '10px 0',
    width: "200px"
});

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleCLick = async () => {
        try {

            const value = { name, username, email, password, roles: ["user"] }
            // const value = {"name":"phankimsinh20@gmail.com","username":"sadsadasd","email":"sinh232@gmail.com","password":"8zavmBfnV7kPDmK","roles":[]}
            const action = register(value);
            const resultAction = await dispatch(action);
            const user = unwrapResult(resultAction);
            if (user.username = username ) {
                // const promise = toast.promise(true, {
                //     loading: 'Loading',
                //     success: 'Got the data',
                //     error: 'Error when fetching',
                //   });
                // await promise;
                toast.success("sussces");
                navigate("/");
            } else {
                toast.error("register fall")
            }
            
            // console.log(user);
            // const response = await UserApi.register(value);
            // console.log(register);
            return null;
        } catch (error) {
            console.log("loi :" + error)
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
                            <h1 className="text-2xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Sign up to your account
                            </h1>
                        </div>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                            <div>
                                <FormControl fullWidth variant="outlined">
                                    <TextField
                                        label="name"
                                        id="outlined-start-adornment"
                                        fullWidth
                                        onInput={(e) => setName(e.target.value)}
                                    />
                                </FormControl>
                                <MyInput fullWidth variant="outlined">
                                    <TextField
                                        label="user name"
                                        id="outlined-start-adornment"
                                        fullWidth
                                        onInput={(e) => setUsername(e.target.value)}
                                    />
                                </MyInput>
                                <FormControl fullWidth variant="outlined">
                                    <TextField
                                        label="email"
                                        id="outlined-start-adornment"
                                        fullWidth
                                        onInput={(e) => setEmail(e.target.value)}
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
                                    <MyButon onClick={handleCLick} variant="contained">register</MyButon>
                                    <MyButon variant="contained">forget password</MyButon>
                                </div>
                                <div className='text-center my-4'>
                                    <Link to={"/auth/signin"}>
                                        you are have account ? login now !
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

export default Register
