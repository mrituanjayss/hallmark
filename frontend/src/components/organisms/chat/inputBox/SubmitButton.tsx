// import StopCircle from '@mui/icons-material/StopCircle'; // Commented by Jay 3/2/2024
import Telegram from '@mui/icons-material/Telegram';
import { CircularProgress, Tooltip } from '@mui/material';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';

import { useChatData, useChatInteract } from '@chainlit/react-client';

interface SubmitButtonProps {
  disabled?: boolean;
  onSubmit: () => void;
}

const SubmitButton = ({ disabled, onSubmit }: SubmitButtonProps) => {
  const { loading } = useChatData();
  const { stopTask } = useChatInteract();

  const handleClick = () => {
    stopTask();
  };

  return (
    <Box
      sx={{
        mr: 1,
        color: 'text.secondary'
      }}
    >
      {!loading ? (
        <Tooltip title="Send message">
          <InputAdornment position="end">
            <IconButton disabled={disabled} color="inherit" onClick={onSubmit}>
              <Telegram />
            </IconButton>
          </InputAdornment>
        </Tooltip>
      ) : (
        <Tooltip title="Stop task">
          <IconButton
            id="stop-button"
            disabled={disabled}
            onClick={handleClick}
            sx={{ color: 'red' }}
          >
            {' '}
            {/*Added by Jay 3/2/2024*/}
            <CircularProgress size={24} color="inherit" />
          </IconButton>
        </Tooltip>
      )}
    </Box>
  );
};

export { SubmitButton };
