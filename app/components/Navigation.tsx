'use client';

import { CENTER } from '@/constants/styles.constants';
import MenuIcon from '@mui/icons-material/Menu';
import {
    AppBar,
    Box,
    Container,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    SwipeableDrawer,
    Toolbar,
} from '@mui/material';
import Image from 'next/image';
import NextLink from 'next/link';
import logo from '@/public/images/small-logo.png';
import { useState } from 'react';
import { COLORS } from '@/constants/colors.constants';
import drawerLogo from '@/public/images/Navigation Logo.png';
import { PAGES_ORDERED } from '@/constants/pages.constants';
import CloseIcon from '@mui/icons-material/Close';
import { useSmallScreen } from '../../hooks/useSmallScreen';
import { theme } from '@/theme/theme';

const logoSize = 28;

export default function Navigation() {
    const [drawer, setDrawer] = useState(false);

    const closeDrawer = () => setDrawer(false);
    const openDrawer = () => setDrawer(true);

    const smallScreenSize = useSmallScreen();

    return (
        <>
            <AppBar
                enableColorOnDark
                position="sticky"
                sx={{ backgroundColor: theme.palette.primary.dark }}
            >
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
            <SwipeableDrawer
                anchor="right"
                open={drawer}
                onClose={closeDrawer}
                onOpen={openDrawer}
            >
                <Box
                    sx={{
                        minWidth: 320,
                        pb: 4,
                        backgroundColor: COLORS.smokeyGray,
                        flexGrow: 1,
                    }}
                >
                    <IconButton
                        size="large"
                        onClick={closeDrawer}
                        sx={{ mt: 1, ml: 1 }}
                    >
                        <CloseIcon sx={{ color: COLORS.oatmeal }} />
                    </IconButton>
                    <Box sx={{ ...CENTER, px: 2, py: 4 }}>
                        <Image
                            style={{
                                maxWidth: smallScreenSize ? 140 : 200,
                                height: 'auto',
                            }}
                            src={drawerLogo}
                            alt="logo"
                        />
                    </Box>
                    <List
                        sx={{
                            width: '100%',
                            px: 2,
                        }}
                    >
                        {PAGES_ORDERED.map((page, index) => (
                            <ListItem
                                disablePadding
                                divider
                                key={page.title}
                                sx={{
                                    borderTop: index === 0 ? 1 : 0,
                                    borderBottom: 1,
                                    borderColor: COLORS.oatmeal,
                                    color: COLORS.oatmeal,
                                }}
                            >
                                <ListItemButton
                                    onClick={closeDrawer}
                                    component={NextLink}
                                    href={page.route}
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'flex-end',
                                    }}
                                >
                                    {page.title}
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </SwipeableDrawer>
        </>
    );
}
