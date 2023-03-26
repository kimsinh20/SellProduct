import { Tab, Tabs } from '@mui/material'
import React from 'react'

const ProductSort = ({currentSort,onChange}) => {
    const handleChange = (event, newValue) => {
        // setValue(newValue);
        if(onChange) onChange(newValue);
      };
  return (
    <div>
        <Tabs
          value={currentSort}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
            <Tab label="name asc" value="name:asc"></Tab>
            <Tab label="name desc" value="name:desc"></Tab>
            <Tab label="price asc" value="price:asc"></Tab>
            <Tab label="price desc" value="price:desc"></Tab>
        </Tabs>
    </div>
  )
}

export default ProductSort