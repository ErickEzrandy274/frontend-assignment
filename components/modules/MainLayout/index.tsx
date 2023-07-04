import React from "react";
import { MainLayoutProps } from "./interface";
import { Toaster } from "react-hot-toast";
import { Footer, Navbar } from "@elements";
import { Flex } from "@chakra-ui/react";

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
	return (
		<Flex flexDir="column" justifyContent="space-between" minH="100vh">
			<Navbar />
			{children}
			<Footer />
			<Toaster />
		</Flex>
	);
};

export default MainLayout;
