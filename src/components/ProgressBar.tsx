import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { memo } from 'react';
const theme = createTheme({
  palette: {
    primary: {
      main: "#841EFF",
    },
  },
});

interface ProgressProps {
  value: number;
}

const ProgressBar: React.FC<ProgressProps> = ({ value }) => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: "100%" }}>
        <LinearProgress
          variant="determinate"
          value={value}
          sx={{ color: theme.palette.primary.main }}
        />
      </Box>
    </ThemeProvider>
  );
};

export default memo(ProgressBar);
