import logo from "../../../assets/icons/airbnb-logo.png";
import React from "react";
import {Box} from "@mui/material";

function Logo() {
	return (
		<Box>
			{/* Le logo */}
			<img style={{height: '85px', width: '125px'}} src={logo} alt="Logo"/>
		</Box>


	);
}

export default Logo;