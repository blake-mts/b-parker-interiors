'use client';

import { CENTER } from '@/constants/styles.constants';
import MenuIcon from '@mui/icons-material/Menu';
import {
    AppBar,
    Box,
    Container,
    Drawer,
    IconButton,
    List,
    ListItem,
    Toolbar,
    useMediaQuery,
    useTheme,
} from '@mui/material';
import Image from 'next/image';
import NextLink from 'next/link';
import logo from '@/public/images/small-logo.png';
import { useState } from 'react';

const logoSize = 28;

export default function Navigation() {
    const [drawer, setDrawer] = useState(false);

    const closeDrawer = () => setDrawer(false);
    const openDrawer = () => setDrawer(true);

    const theme = useTheme();
    const smallScreenSize = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <>
            <AppBar position="sticky">
                <Container maxWidth="xl" disableGutters>
                    <Toolbar
                        sx={{ px: smallScreenSize ? 1 : 2 }}
                        disableGutters
                        variant="dense"
                    >
                        <IconButton
                            href="/"
                            component={NextLink}
                            color="inherit"
                        >
                            <Box
                                sx={{
                                    height: logoSize,
                                    width: logoSize,
                                    ...CENTER,
                                }}
                            >
                                <Image
                                    priority
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
                            onClick={openDrawer}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </Container>
            </AppBar>
            <Drawer anchor="right" open={drawer} onClose={closeDrawer}>
                <List sx={{ minWidth: 300 }}>
                    <ListItem>YO</ListItem>
                </List>
            </Drawer>
        </>
    );
}
