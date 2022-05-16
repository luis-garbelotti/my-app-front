import { Alert as MUIAlert, Snackbar } from '@mui/material';
import useAlert from '../../hooks/useAlert';

export default function Alert() {
  const { message, handleClose } = useAlert();

  return (
    <Snackbar open={!!message} autoHideDuration={3500} onClose={handleClose} /* anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }} */>
      <MUIAlert
        onClose={handleClose}
        severity={message?.type || 'error'}
        sx={{ width: '100%' }}
      >
        {message?.text}
      </MUIAlert>
    </Snackbar>
  );
}