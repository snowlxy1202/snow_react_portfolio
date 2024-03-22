import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import { useNavigate } from "react-router-dom";

export default function Navigation() {
	const [anchorElNav, setAnchorElNav] = React.useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	let navigate = useNavigate(); 
	const naviagteToAbout = () => {
		navigate('/about');
	}
	const naviagteToContact = () => {
		navigate('/contact');
	}
	const naviagteToPortfolio = () => {
		navigate('/portfolio');
	}
	const naviagteToResume = () => {
		navigate('/resume');
	}


	return (
		<AppBar position="static">
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<AcUnitIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
					<Typography
						variant="h6"
						noWrap
						component="a"
						href="/"
						sx={{
							mr: 2,
							display: { xs: 'none', md: 'flex' },
							fontFamily: 'monospace',
							fontWeight: 700,
							letterSpacing: '.3rem',
							color: 'inherit',
							textDecoration: 'none',
						}}
					>
						SNOW LI
					</Typography>

					<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="inherit"
						>
							<MenuIcon />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'left',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'left',
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: 'block', md: 'none' },
							}}
						>
							<MenuItem onClick={naviagteToAbout}>
								<Typography textAlign="center">About me</Typography>
							</MenuItem>
							<MenuItem onClick={naviagteToPortfolio}>
								<Typography textAlign="center">Portfolio</Typography>
							</MenuItem>
							<MenuItem onClick={naviagteToContact}>
								<Typography textAlign="center">Contact</Typography>
							</MenuItem>
							<MenuItem onClick={naviagteToResume}>
								<Typography textAlign="center">Resume</Typography>
							</MenuItem>
						</Menu>
					</Box>
					<AcUnitIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
					<Typography
						variant="h5"
						noWrap
						component="a"
						href="#app-bar-with-responsive-menu"
						sx={{
							mr: 2,
							display: { xs: 'flex', md: 'none' },
							flexGrow: 1,
							fontFamily: 'monospace',
							fontWeight: 700,
							letterSpacing: '.3rem',
							color: 'inherit',
							textDecoration: 'none',
						}}
					>
						SNOW LI
					</Typography>
					<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
							<Button
								onClick={naviagteToAbout}
								sx={{ my: 2, color: 'white', display: 'block' }}
							>
								About me
							</Button>
							<Button
								onClick={naviagteToPortfolio}
								sx={{ my: 2, color: 'white', display: 'block' }}
							>
								Portfolio
							</Button>
							<Button
								onClick={naviagteToContact}
								sx={{ my: 2, color: 'white', display: 'block' }}
							>
								Contact
							</Button>
							<Button
								onClick={naviagteToResume}
								sx={{ my: 2, color: 'white', display: 'block' }}
							>
								Resume
							</Button>
					</Box>

				</Toolbar>
			</Container>
		</AppBar>
	);
}