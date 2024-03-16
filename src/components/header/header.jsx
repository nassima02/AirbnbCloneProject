
import Navbar from "./header-components/nav-bar";
import Logo from "./header-components/logo";
import AdminSection from "./header-components/admin-section";
import {Box} from "@mui/material";
import SearchBar from "./header-components/search-bar";

function Header() {
	return (
		<Box position="static" style={{ display: 'flex', alignItems: 'center', background: 'white', color:'black', justifyContent:'space-between'}}>
			{/* Le logo */}
			<Logo/>
			{/* la barre de navigation */}
			<Navbar />
			{/* la barre d'admin */}
			<AdminSection/>
			{/* la barre de recherche */}
			<SearchBar/>
		</Box>
	);
}

export default Header;