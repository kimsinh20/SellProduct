import React, { useState } from "react"
import { AiFillPhone, AiFillMail } from "react-icons/ai"
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
const Head = () => {
    const [age, setAge] = useState('English');
    return (
        <>
            <section className='grid grid-cols-2 bg-sky-700 text-white pt-3  text-sm'>
                <div className='flex'>
                    <div className="flex ml-10 mr-10 mt-4">
                        <AiFillPhone className="mr-2" />
                        <label> +88012 3456 7894</label>
                    </div>
                    <div className="flex mt-4">
                        <AiFillMail className="mr-2" />
                        <label> support@ui-lib.com</label>
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
                                value={age}
                                label="Language"
                                onChange={(e) => setAge(e.target.value)}
                                sx={{color:"white"}}
                            >
                                <MenuItem value={10}>English</MenuItem>
                                <MenuItem value={20}>Tiếng việt</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </div>
            </section>
        </>
    )
}

export default Head
