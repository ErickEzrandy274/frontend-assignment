import React from "react";
import {
	Box,
	Flex,
	HStack,
	IconButton,
	useDisclosure,
	useColorModeValue,
	Stack,
	Heading,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { routeList } from "./constant";
import { NavLinkProps } from "./interface";
import Link from "next/link";
import { useRouter } from "next/router";

const NavLink: React.FC<NavLinkProps> = ({ name, url }) => {
	const { pathname } = useRouter();

	return (
		<Link href={url}>
			<Box
				px={2}
				py={1}
				rounded={"md"}
				_hover={{
					textDecoration: "none",
					bg: "gray.500",
					color: "gray.200",
				}}
				bg={pathname === url ? "gray.500" : "transparent"}
				color={pathname === url ? "gray.200" : "black"}
				fontWeight={pathname === url ? "semibold" : "medium"}
			>
				{name}
			</Box>
		</Link>
	);
};

const Navbar = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<Box bg="cyan.500" px={4}>
			<Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
				<HStack spacing={8} alignItems={"center"}>
					<Heading
						bgGradient="linear(to-br, #facc15, #ec4899)"
						bgClip="text"
						textTransform="uppercase"
					>
						Sathi
					</Heading>
					<HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
						{routeList.map((link) => (
							<NavLink key={link.url} {...link} />
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
							<NavLink key={link.url} {...link} />
						))}
					</Stack>
				</Box>
			) : null}
		</Box>
	);
};

export default Navbar;
