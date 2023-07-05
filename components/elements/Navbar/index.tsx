import React from "react";
import {
	Box,
	Flex,
	HStack,
	IconButton,
	useDisclosure,
	Stack,
	Heading,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { SearchBar } from "@elements";
import Link from "next/link";

const Navbar = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<Box bg="cyan.500" px={4} position="fixed" top={0} zIndex={2} w="full">
			<Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
				<HStack spacing={8} alignItems={"center"}>
					<Link href="/">
						<Heading bgGradient="linear(to-br, #facc15, #ec4899)" bgClip="text">
							OnlineStore
						</Heading>
					</Link>

					<Box display={{ base: "none", md: "block" }}>
						<SearchBar />
					</Box>
				</HStack>

				<IconButton
					size={"md"}
					icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
					aria-label={"Open Menu"}
					display={{ md: "none" }}
					onClick={isOpen ? onClose : onOpen}
				/>
			</Flex>

			{isOpen && (
				<Box pb={4} display={{ md: "none" }}>
					<Stack as={"nav"} spacing={2}>
						<SearchBar />
					</Stack>
				</Box>
			)}
		</Box>
	);
};

export default Navbar;
