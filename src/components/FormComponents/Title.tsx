import { Box } from '@mui/material';

const style = {
  marginTop: '20px',
  marginBottom: '20px',
  fontWeight: '500',
  fontSize: '18px',
  color: '#fff',
  fontFamily: 'Poppins',
  fontWeigth: 'bold'
};

interface Props {
  text: string
}

function Title({ text }: Props) {
  return (
    <Box
      component="div"
      sx={style}
    >
      {text}
    </Box>
  );
}

export default Title;