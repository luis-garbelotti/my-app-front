import { styled } from '@mui/material/styles';
import { OutlinedInputProps } from '@mui/material/OutlinedInput';
import TextField, { TextFieldProps } from '@mui/material/TextField';

const RedditTextField = styled((props: TextFieldProps) => (
  <TextField
    InputProps={{ disableUnderline: true } as Partial<OutlinedInputProps>}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiFilledInput-root': {
    overflow: 'hidden',
    borderRadius: '10px',
    backgroundColor: /* theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b' */ 'transparent',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
    '&:hover': {
      backgroundColor: 'transparent'
    },
    '&.Mui-focused': {
      backgroundColor: 'transparent',
      borderRadius: '10px'
    },
  },
}));

interface Props {
  label: string;
  name: string,
  placeholder: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export default function Input({ label, placeholder, name, value, onChange }: Props) {
  return (
    <RedditTextField
      label={placeholder}
      value={value}
      variant="filled"
      type={label}
      name={name}
      style={{ width: '100%', height: '100%',   }}
      onChange={onChange}
      InputLabelProps={{
        style: { color: '#848484' },
      }}
    />
  );
}
  