import React, { useState } from 'react';
import { Chip, Toolbar, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import '../../../index.scss';
function Navbar() {
	const navigate = useNavigate();
	const [selectedLink, setSelectedLink] = useState('/logement'); // Sélectionner le lien Logement par défaut

	const handleClick = (to) => {
		setSelectedLink(to);
		navigate('./'); // Redirection vers l'URL spécifiée
	};

	const createNavLink = (label, to) => {
		return (
			<Chip
				key={to}
				label={<Typography variant="inherit" sx={{fontWeight: to === selectedLink ? 'bold' : 'normal', color: to === selectedLink ? 'black' : 'grey', fontSize: '16px' }}>{label}</Typography>}
				onClick={() => handleClick(to)}
				clickable
				sx={{
					borderRadius: '20px',
					background: 'transparent',
					padding: '20px 8px', // Ajouter du padding en x et en y
					'&:hover': {
						background: to === selectedLink ? 'transparent' : 'rgba(240, 240, 240, 0.8)', // Gris clair avec transparence au survol
						'& .MuiTypography-root': {
							color: 'black', // Texte noir au survol
						},
					},
				}}
			/>
		);
	};

	return (
		<Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
			{/* Les puces de navigation */}
			{createNavLink('Logements', '/logement')}
			{createNavLink('Expériences', '/experience')}
			{createNavLink('Expériences en ligne', '/liens')}
		</Toolbar>
	);
}

export default Navbar;