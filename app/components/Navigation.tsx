'use client';

import { CENTER } from '@/constants/styles.constants';
import MenuIcon from '@mui/icons-material/Menu';
import {
    AppBar,
    Box,
    Container,
    IconButton,
    Toolbar,
    useMediaQuery,
    useTheme,
} from '@mui/material';
import Image from 'next/image';
import NextLink from 'next/link';
import logo from '@/public/images/Navigation Logo.png';

const logoSize = 24;

export default function Navigation() {
    const theme = useTheme();
    const smallScreenSize = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <AppBar position="sticky">
            <Container maxWidth="xl" disableGutters>
                <Toolbar
                    sx={{ px: smallScreenSize ? 1 : 2 }}
                    disableGutters
                    variant="dense"
                >
                    <IconButton href="/" component={NextLink} color="inherit">
                        <Box
                            sx={{
                                height: logoSize,
                                width: logoSize,
                                ...CENTER,
                            }}
                        >
                            <Image
                                alt="logo"
                                src={logo}
                                style={{
                                    width: 'auto',
                                    height: '100%',
                                }}
                            />
                        </Box>
                    </IconButton>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ ml: 'auto' }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
