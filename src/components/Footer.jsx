import Box from '@mui/material/Box';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from '@mui/material';

export default function Footer() {
    return (
        <>
            <Box display="flex"
                justifyContent="center"
                alignItems="center">
                <Link href="https://github.com/snowlxy1202" color="inherit" target="_blank">
                    <GitHubIcon sx={{ display: { xs: 'flex', md: 'flex' } }} />
                </Link>
            </Box>
        </>
    );
}