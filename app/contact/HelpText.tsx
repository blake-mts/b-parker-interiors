import { CheckCircle, Error } from '@mui/icons-material';
import { Box, CircularProgress, Typography } from '@mui/material';
import { useContactForm } from './FormContext';

export default function HelpText() {
    const { state } = useContactForm();

    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {state.submitting && (
                <>
                    <Typography variant="subtitle1" sx={{ mr: 2 }}>
                        Submitting Information. . .
                    </Typography>
                    <CircularProgress color="secondary" size="1.5rem" />
                </>
            )}
            {!state.submitting &&
                (state.valid ? (
                    <>
                        <Typography variant="subtitle1" sx={{ mr: 1 }}>
                            All required fields are complete.
                        </Typography>
                        <CheckCircle color="success" />
                    </>
                ) : (
                    <>
                        <Typography variant="subtitle1" sx={{ mr: 1 }}>
                            Please complete all required fields.
                        </Typography>
                        <Error color="warning" />
                    </>
                ))}
        </Box>
    );
}
