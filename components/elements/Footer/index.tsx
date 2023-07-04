import { Box, Text, useColorModeValue } from "@chakra-ui/react";

const Footer = () => {
	return (
		<Box
			p={5}
			fontSize={{ base: "lg", md: "xl" }}
			bg="cyan.500"
			textAlign="center"
			fontWeight="semibold"
		>
			<Text>© Online Store Sathi. All rights reserved</Text>
		</Box>
	);
};

export default Footer;
