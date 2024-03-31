import { SentimentVeryDissatisfied } from '@mui/icons-material';
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

interface ErrorDialogProps {
    state: boolean;
    setState: Dispatch<SetStateAction<boolean>>;
}

export default function ErrorDialog({ state, setState }: ErrorDialogProps) {
    const close = () => {
        setState(false);
    };

    return (
        <Dialog open={state}>
            <DialogTitle>Error</DialogTitle>
            <DialogContent>
                <Typography sx={{ mb: 2 }}>
                    We&apos;re sorry, there was an error when trying to submit
                    your form. Please try again later.
                </Typography>
                <Box textAlign="center">
                    <SentimentVeryDissatisfied fontSize="large" />
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
