import { Box, keyframes } from "@chakra-ui/react";
import React from "react";

const PrimaryLoader = () => {
	const spin = keyframes`
	to {transform: rotate(1turn)}
	`;

	return (
		<Box
			w="50px"
			h="50px"
			rounded="full"
			m="auto"
			bg="conic-gradient(#0000 10%, #00B5D8)"
			animation={`${spin} 1s infinite linear`}
			className="custom-loader"
		/>
	);
};

export default PrimaryLoader;
