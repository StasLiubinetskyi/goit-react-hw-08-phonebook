import { ErrorOutline } from '@mui/icons-material';
import { Typography, Paper } from '@mui/material';
import styled from 'styled-components';

const ErrorContainer = styled(Paper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  background-color: #fff;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const ErrorIcon = styled(ErrorOutline)`
  font-size: 48px;
  color: #ec3a0d;
`;

const ErrorMessage = styled(Typography)`
  margin-top: 16px;
  font-size: 24px;
`;

const ErrorComponent = ({ message }) => {
  return (
    <ErrorContainer>
      <ErrorIcon />
      <ErrorMessage variant="h5" component="p">
        {message}
      </ErrorMessage>
    </ErrorContainer>
  );
};

export default ErrorComponent;
