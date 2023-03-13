import React, { useState } from "react"
import { AiFillPhone, AiFillMail } from "react-icons/ai"
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch,useSelector } from 'react-redux';
import { setLanguage } from "../../../languageSlice/languageSlice";

const Head = () => {
    const dispatch = useDispatch();

  const handleLanguageChange = (language) => {
    dispatch(setLanguage(language));
  };
  const language = useSelector((state) => state.language.language);
//   console.log(language)
    return (
        <>
            <section className='grid grid-cols-2 bg-sky-700 text-white pt-3  text-base'>
                <div className='flex'>
                    <div className="flex ml-10 mr-10 mt-4">
                        <AiFillPhone className="mr-1" />
                        <label className="leading-3"> +88012 3456 7894</label>
                    </div>
                    <div className="flex mt-4">
                        <AiFillMail className="mr-1" />
                        <label className="leading-3"> support@ui-lib.com</label>
                    </div>
                </div>
                <div className='justify-end flex'>
                    <label className="mt-4">Theme FAQ"s</label>
                    <label className="ml-8 mt-4">Need Help?</label>
                    <Box sx={{ minWidth: 140,color:"white",marginLeft :"60px",marginRight:"80px" }}>
                        <FormControl fullWidth>
                            <InputLabel sx={{color:"white"}} id="demo-simple-select-label">Language</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={language}
                                label="Language"
                                onChange={(e) => handleLanguageChange(e.target.value)}
                                sx={{color:"white"}}
                            >
                                <MenuItem  value={"en"}>English</MenuItem>
                                <MenuItem  value={"vn"}>Tiếng việt</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </div>
            </section>
        </>
    )
}

export default Head
