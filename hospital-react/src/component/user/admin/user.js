import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {CgProfile} from 'react-icons/cg';
import Nav from '../../nav/navbar';
import './user.css';
import Profile from '../profile/profile';
import UpdateProfile from '../UpdateProfile/updateProfile';
import Dashboard from '../dashbord/dashboard';
import UpdateProfileTab from '../UpdateProfile/updateProfileTab';
import Doctor from '../doctor/doctor';
import Hospital from '../hospital/hospital';
import AdminTab from './adminTab';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
   
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      
      {value === index && (
        <Box sx={{ p: 3 }}>
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
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className='box'>
      <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex' }}
    >
      <Tabs
        className='tabs'
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="Profile"  {...a11yProps(0)} />
        <Tab label="Dashboard" {...a11yProps(1)} />
        <Tab label="Doctor" {...a11yProps(2)} />
        <Tab label="Hospital" {...a11yProps(3)} />
        <Tab label="Appointment recode" {...a11yProps(4)} />
        <Tab label="Add Admin" {...a11yProps(5)} />
        <Tab label="UpdateProfile" {...a11yProps(6)} />
      </Tabs>
      <TabPanel value={value} index={0}>
      <Profile/>
       </TabPanel>
      <TabPanel value={value} index={1}>
        <Dashboard/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Doctor/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Hospital/>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <AdminTab/>
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        <UpdateProfileTab/>
      </TabPanel>
    </Box>
    
    </div>
    
  );
}
