import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import '../profile/index.scss'
import { TextField } from '@mui/material';

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

const inputProps = {
  color: 'ff2211',
  backgroundColor: '000000',

};

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '35%',  color:'#FF9900', backgroundColor:'white', borderRadius: '30px', }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', color:"#FF9900" }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab  sx={{color:'#FF9900'}} label="Consumer" {...a11yProps(0)} />
          <Tab sx={{color:'#FF9900'}} label="Buisness" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div className='customer'>
          Ready to create an account with LeanOrb?
          <br/>
          <TextField inputProps={{inputProps}} label='Name'/>
          <br/>
          Where are you located? 
          <br/> 
          <TextField label='Address'/> 
          <button className='profile-button'>Apply Now</button>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <div className='Buisness'>
          Ready to create an account with LeanOrb?
          <br/>
          <TextField inputProps={{inputProps}} label='Name'/>
          <br/>
          Where are you located? 
          <br/> 
          <TextField label='Address'/> 
          <button className='profile-button'>Apply Now</button>
        </div>
      </TabPanel>
    </Box>
  );
}




