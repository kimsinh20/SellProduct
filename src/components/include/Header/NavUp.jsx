import { Badge, IconButton, Paper, Tooltip } from "@mui/material"
import Avatar from '@mui/material/Avatar'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { styled } from '@mui/system'
import React from 'react'
import { BsFillBackspaceFill, BsFillCartCheckFill } from "react-icons/bs"
import { GiHamburgerMenu } from "react-icons/gi"
import { GoSignIn } from "react-icons/go"
import { SiGnuprivacyguard } from "react-icons/si"
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { hideMiniCart } from "../../../slice/cartSlice/cartSlice"
import { logout } from "../../../slice/userSlice/UserSlice"
import { selectCountCartItems, selectTotalCartItems } from './../../../slice/cartSlice/Selector'
import NavUpSearch from "./NavUpSearch"
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

    // const countCartitem = 1;
    const countCartitem = useSelector(selectCountCartItems);
    //const total = useSelector(selectTotalCartItems);
    const showMiniCart = useSelector((state) => state.cart.showMiniCart)
    const handleExitMiniCart = () => {
        const action = hideMiniCart();
        dispatch(action);
    }
    // console.log(total)
    // console.log(countCartitem)
    return (
        <React.Fragment>
            <section className='grid grid-cols-3 pt-2 pb-2'>
                <div className='flex justify-center font-bold pt-2'>
                    <Link to={"/"}>
                        <p className='text-5xl'>KS<span className='font-xs text-4xl text-red-600'>SHOP</span> </p>
                    </Link>
                </div>

                <NavUpSearch/>
                
                <div className='flex justify-center '>
                    <div className="mr-6 leading-6 relative">
                        <Link to={"/cart"} className="lr-8">
                            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                                <Badge badgeContent={countCartitem} color="error">
                                    <BsFillCartCheckFill className='text-4xl' />
                                </Badge>
                            </IconButton>
                        </Link>
                        {showMiniCart && (
                            <Paper className="absolute w-56 mt-5 p-4 rounded-sm flex flex-col items-center">
                                <BsFillBackspaceFill className="absolute right-2 text-3xl" onClick={handleExitMiniCart} />
                                <p className="text-xl my-2">add cart susscesfully</p>
                                <Link to={"/cart"}>
                                    <button onClick={handleExitMiniCart} className="bg-red-500 rounded-md px-2 py-2 text-white text-center w-28">view cart</button>
                                </Link>
                            </Paper>
                        )}
                    </div>
                    <div className="ml-6 pt-2">

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
