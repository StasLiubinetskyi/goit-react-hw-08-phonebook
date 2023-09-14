import { Paper, Typography } from '@mui/material';
import { ErrorOutline } from '@mui/icons-material';

const ErrorComponent = ({ message }) => {
  return (
    <Paper
      elevation={3}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '16px',
        backgroundColor: '#fff',
        border: '1px solid #dcdcdc',
        borderRadius: '4px',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
      }}
    >
      <ErrorOutline style={{ fontSize: '48px', color: '#ec3a0d' }} />
      <Typography
        variant="h5"
        component="p"
        style={{ marginTop: '16px', fontSize: '24px' }}
      >
        {message}
      </Typography>
    </Paper>
  );
};

export default ErrorComponent;
