import { IconButton, TextField, Tooltip } from "@mui/material"
import Avatar from '@mui/material/Avatar'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { styled } from '@mui/system'
import React from 'react'
import { BsFillCartCheckFill } from "react-icons/bs"
import { GiHamburgerMenu } from "react-icons/gi"
import { GoSignIn } from "react-icons/go"
import { SiGnuprivacyguard } from "react-icons/si"
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {useDispatch} from "react-redux"
import { logout } from "../../../slice/userSlice/UserSlice"
const MyButton = styled(IconButton)({
    padding: '0px',
});
const MyMenuItem = styled(MenuItem)({
    fontSize: "20px"
});

const NavUp = () => {
    const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        document.body.classList.add('p-0');
    };
    const handleClose = () => {
        setAnchorEl(null);
        document.body.classList.add('p-0');
    };
    const loginUser = useSelector((state) => state.user.current);
    const isLogin = !!loginUser.username;

    const handleLogout = () => {
        const lg = logout()
     dispatch(lg)
    }
    return (
        <React.Fragment>
            <section className='grid grid-cols-3 pt-2 pb-2'>
                <div className='flex justify-center font-bold '>
                    <Link to={"/"}>
                        <p className='text-4xl'>KS<span className='font-xs text-3xl text-red-600'>SHOP</span> </p>
                    </Link>
                </div>

                <div className='text-center flex'>
                    <TextField fullWidth label="key word" id="fullWidth" />
                    {/* <FaSearch /> */}
                </div>
                <div className='flex justify-center '>
                    <Link to={"/cart"}>
                        <BsFillCartCheckFill className='text-4xl leading-6 mr-8' />
                    </Link>
                    <div>

                        <Tooltip title="Account settings">
                            <MyButton
                                onClick={handleClick}
                                size="small"
                                // sx={{ ml: 2 }}
                                aria-controls={open ? 'account-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                            >
                                {!isLogin && (
                                    <GiHamburgerMenu className='text-4xl text-black' />
                                )}
                                {isLogin && (
                                    <Avatar variant='solid' className='' size='sm' />
                                )}

                            </MyButton>
                        </Tooltip>
                        <Menu
                            anchorEl={anchorEl}
                            id="account-menu"
                            open={open}
                            onClose={handleClose}
                            onClick={handleClose}
                            PaperProps={{
                                elevation: 0,
                                sx: {
                                    // overflow: 'visible',
                                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                    mt: 1.5,
                                    '& .MuiAvatar-root': {
                                        width: 42,
                                        height: 42,
                                        ml: -0.5,
                                        mr: 1,
                                    },
                                    '&:before': {
                                        content: '""',
                                        display: 'block',
                                        position: 'absolute',
                                        top: 0,
                                        right: 14,
                                        width: 10,
                                        height: 10,
                                        bgcolor: 'background.paper',
                                        transform: 'translateY(-50%) rotate(45deg)',
                                        zIndex: 0,
                                    },
                                },
                            }}
                            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                        >
                            <Link to={"/"}>
                                <MyMenuItem >
                                    <Avatar /> {loginUser.username}
                                </MyMenuItem>
                            </Link>
                            <Link to={"/auth/signup"}>
                                <MyMenuItem onClick={handleClose}>
                                    <SiGnuprivacyguard /> register
                                </MyMenuItem>
                            </Link>
                            {!isLogin && (
                                <Link to={"/auth/signin"}>
                                    <MyMenuItem onClick={handleClose} >
                                        <GoSignIn /> login
                                    </MyMenuItem>
                                </Link>
                            )}
                            {isLogin && (
                                <Link to={"/auth/signin"} onClick={handleLogout}>
                                    <MyMenuItem onClick={handleClose} >
                                        <GoSignIn /> logout
                                    </MyMenuItem>
                                </Link>

                            )}
                        </Menu>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
export default NavUp;
