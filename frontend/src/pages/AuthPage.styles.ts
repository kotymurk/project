import { styled } from '@mui/material/styles';
import { Box, Paper } from '@mui/material';

export const StyledAuthBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '32px',
  minHeight: '100vh',
  backgroundColor: '#F8F8FA',
});

export const StyledPaper = styled(Paper)({
  padding: '12px 24px 30px',
  marginBottom: '32px',
  width: '514px',
  borderRadius: '12px',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
});
