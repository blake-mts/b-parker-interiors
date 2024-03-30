import { SentimentVerySatisfied } from '@mui/icons-material';
import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Typography,
} from '@mui/material';
import { Dispatch, SetStateAction } from 'react';

interface SuccessDialogProps {
    state: [boolean, Dispatch<SetStateAction<boolean>>];
}

export default function SuccessDialog({
    state: [state, setState],
}: SuccessDialogProps) {
    const close = () => {
        setState(false);
    };

    return (
        <Dialog open={state}>
            <DialogTitle>Success!</DialogTitle>
            <DialogContent>
                <Typography sx={{ mb: 2 }}>
                    Thank you for contacting us! Your information was
                    successfully sent. We will be in touch as soon as possible!
                </Typography>
                <Box textAlign="center">
                    <SentimentVerySatisfied fontSize="large" />
                </Box>
            </DialogContent>
            <DialogActions>
                <Button
                    onClick={close}
                    fullWidth
                    size="large"
                    variant="contained"
                    color="secondary"
                >
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    );
}
