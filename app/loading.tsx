import { FILL } from '@/constants/styles.constants';
import { Box, CircularProgress, Typography } from '@mui/material';

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <Box
            sx={{
                ...FILL,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <CircularProgress size={100} color="inherit" />
        </Box>
    );
}
