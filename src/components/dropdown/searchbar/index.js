import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import './styles.scss'


export function BasicSelect() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  
  return (
    <Box sx={{ minWidth: 120 }} >
      <FormControl fullWidth >
        <InputLabel className='inputform'>Type</InputLabel>
        <Select
          className='contain'
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Type"
          onChange={handleChange}
        >
          <MenuItem value={10}>Hotel</MenuItem>
          <MenuItem value={20}>Resturant</MenuItem>
          <MenuItem value={30}>School</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export function BasicSelect2() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120, color:'#fff309' }}>
      <FormControl fullWidth>
        <InputLabel className='inputform'>Use</InputLabel>
        <Select
          
          className='contain'
          labelId="inputform"
          id="inputform"
          value={age}
          label="Type"
          onChange={handleChange}
        >
          <MenuItem value={10}>Single</MenuItem>
          <MenuItem value={20}>Multi</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 150,
    },
  },
};

const names = [
  'Cups', 
  'Plates',
  'Boxes',
  'Bags',
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export function BasicSelect3() {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel className='inputform'>Products</InputLabel>
        <Select
          className='contain'
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export function BasicSelect5() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }} color ="red">
      <FormControl fullWidth>
        <InputLabel className='inputform'>custom?</InputLabel>
        <Select
          className='contain'
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Type"
          onChange={handleChange}
        >
          <MenuItem value={10}>Yes</MenuItem>
          <MenuItem value={20}>No</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

