import { Box, Typography } from '@mui/material';

export default function Brand() {
    return (
        <Box
            sx={{
                textAlign: 'center',
                color: 'white',
            }}
        >
            <Typography sx={{ fontSize: 200 }}>B</Typography>
            <Typography variant="h1">B. PARKER</Typography>
            <Typography variant="h2">INTERIORS</Typography>
        </Box>
    );
}
