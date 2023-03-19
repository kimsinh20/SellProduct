import { TabContext, TabPanel } from '@mui/lab';
import TabList from '@mui/lab/TabList';
import { Box, Tab } from '@mui/material';
import React from 'react';
import { useResolvedPath } from 'react-router-dom';

const ProductDetailMenu = () => {
    const url = useResolvedPath("").pathname;
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return (
        <Box component="ul" className=' mb-8' >
            <TabContext  value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider',display:"flex",justifyContent : "center" } }>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <Tab label="description" value="1" />
                        <Tab label="additional information" value="2" />
                        <Tab label="reviews" value="3" />
                    </TabList>
                </Box>
                <TabPanel value="1">Item One</TabPanel>
                <TabPanel value="2">Item Two</TabPanel>
                <TabPanel value="3">Item Three</TabPanel>
            </TabContext>
        </Box>
    )
}

export default ProductDetailMenu