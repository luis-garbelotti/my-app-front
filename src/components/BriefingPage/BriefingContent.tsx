import { Box } from '@mui/material';

const styles = {
  width: '90%',
  height: '75vh',

  display: 'flex',
  flexDirection: 'column',

  gap: '10px',
  padding: '30px 25px 30px 25px',

  borderRadius: '15px',
  backgroundColor: '#343434',
  overflow: 'auto'
};

interface Props {
  children: React.ReactNode;
}

function BriefingContent({ children }: Props) {
  return (
    <Box component="div" sx={styles}>
      {children}
    </Box>
  );
}

export default BriefingContent;