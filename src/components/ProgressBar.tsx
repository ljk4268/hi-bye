import Box from '@mui/material/Box'
import LinearProgress from '@mui/material/LinearProgress'

interface ProgressProps {
  value: number;
}


const ProgressBar: React.FC<ProgressProps> = ({value}) => {
  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgress variant="determinate" value={value} />
    </Box>
  )
}

export default ProgressBar
