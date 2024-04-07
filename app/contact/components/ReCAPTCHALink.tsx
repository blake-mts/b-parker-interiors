import { COLORS } from '@/constants/colors.constants';
import { Link, LinkProps, darken } from '@mui/material';

export default function ReCAPTCHALink(props: LinkProps) {
    return (
        <Link
            color={darken(COLORS.granularLimestone, 0.1)}
            sx={{
                mx: '.1rem',
            }}
            target="_blank"
            {...props}
        />
    );
}
