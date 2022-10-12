import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import '../profile/index.scss'
import TextField from '@mui/material/TextField';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      color="white"
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3,  }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '35%', height:'40%', color:'#FF9900', backgroundColor:'black', borderRadius: '30px', }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', color:"#FF9900" }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab  sx={{color:'#FF9900'}} label="Consumer" {...a11yProps(0)} />
          <Tab sx={{color:'#FF9900'}} label="Buisness" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        Ready to create an account with LeanOrb?
        <button className='profile-button'>Apply Now</button>
        <br/>
        TESTING OUT THE WORDS ON THIS STUFF
        <TextField/>

      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
    </Box>
  );
}
