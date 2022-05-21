import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { useState } from 'react';
import { Box } from '@mui/material';

const style = {
  width: '100%',
  height: '5vh',
  padding: '0 15px',
  borderRadius: '5px',
  border: 'none',
  margin: '0 0 10px 0',
  bgcolor: '#343434',
  color: '#fff',

  ':focus': {
    outline: '2px solid #BF0000',
  }
};

export default function AddInputDate() {
  const [value, setValue] = useState<Date | null>();

  const handleChange = (newValue: Date | null) => {
    setValue(newValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DesktopDatePicker 
          label="Date"
          inputFormat="MM/dd/yyyy"
          value={value}
          onChange={handleChange}
          renderInput={({ inputRef, inputProps, InputProps }) => (
            <Box sx={style}>
              <input />
              {InputProps?.endAdornment}
            </Box>
        )}
        />
    </LocalizationProvider>
  );
}
