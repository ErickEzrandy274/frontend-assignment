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
import { routeList } from "./constant";
import { NavLinkProps } from "./interface";
import { useRouter } from "next/router";

const NavLink: React.FC<NavLinkProps> = ({ name, url, onClose }) => {
	const { pathname, push } = useRouter();
	const handleClick = () => {
		push(url);
		onClose();
	};

	return (
		<Box
			onClick={handleClick}
			px={2}
			py={1}
			rounded={"md"}
			_hover={{
				bg: "gray.500",
				color: "gray.200",
			}}
			bg={pathname === url ? "gray.500" : "transparent"}
			color={pathname === url ? "gray.200" : "black"}
			fontWeight={pathname === url ? "semibold" : "medium"}
		>
			{name}
		</Box>
	);
};

const Navbar = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<Box bg="cyan.500" px={4} position="fixed" top={0} zIndex={2} w="full">
			<Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
				<HStack spacing={8} alignItems={"center"}>
					<Heading bgGradient="linear(to-br, #facc15, #ec4899)" bgClip="text">
						OnlineStore
					</Heading>
					<HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
						{routeList.map((link) => (
							<NavLink key={link.url} {...link} onClose={onClose} />
						))}
					</HStack>
				</HStack>

				<IconButton
					size={"md"}
					icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
					aria-label={"Open Menu"}
					display={{ md: "none" }}
					onClick={isOpen ? onClose : onOpen}
				/>
			</Flex>

			{isOpen ? (
				<Box pb={4} display={{ md: "none" }}>
					<Stack as={"nav"} spacing={2}>
						{routeList.map((link) => (
							<NavLink key={link.url} {...link} onClose={onClose} />
						))}
					</Stack>
				</Box>
			) : null}
		</Box>
	);
};

export default Navbar;
