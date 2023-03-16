import React from 'react'
import { IconButton, TextField, Tooltip } from "@mui/material"
import { BsFillCartCheckFill } from "react-icons/bs"
import Avatar from '@mui/material/Avatar'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/system';

const MyButton = styled(IconButton)({
    padding: '0px',
});
const NavUp = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
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
                                sx={{ ml: 2 }}
                                aria-controls={open ? 'account-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                            >
                                <Avatar variant='solid' className='' size='sm' />
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
                                    overflow: 'visible',
                                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                    mt: 1.5,
                                    '& .MuiAvatar-root': {
                                        width: 32,
                                        height: 32,
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
                            <Link to={"/auth/signin"}>
                            <MenuItem onClick={handleClose}>
                                <Avatar /> login
                            </MenuItem>
                            </Link>
                            <Link to={"/auth/signup"}>
                            <MenuItem onClick={handleClose}>
                                <Avatar /> register
                            </MenuItem>
                            </Link>
                        </Menu>
                    </div>
                </div>
            </section>
        </>
    )
}
export default NavUp;
