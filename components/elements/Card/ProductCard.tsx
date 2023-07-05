import {
	Box,
	useColorModeValue,
	Heading,
	Text,
	Stack,
	Image,
	Button,
	Flex,
} from "@chakra-ui/react";
import { ProductCardProps } from "./interface";
import { useRouter } from "next/router";

const ProductCard: React.FC<ProductCardProps> = (props) => {
	const { push } = useRouter();
	const handleClick = () => {
		push(`/product/${props.id}`);
	};

	return (
		<Flex
			flexDir="column"
			justifyContent="space-between"
			role="group"
			p={6}
			maxW="330px"
			w="full"
			bg={useColorModeValue("white", "gray.800")}
			boxShadow="2xl"
			rounded="2xl"
			pos="relative"
			zIndex={1}
			gap={3}
		>
			<Box rounded="lg" mt={0} pos="relative" height="230px">
				<Image
					rounded="lg"
					height={230}
					width={282}
					blendMode="darken"
					objectFit="contain"
					src={props.image}
					alt={props.title}
				/>
			</Box>

			<Flex flexDir="column" gap={5} justifyContent="space-between">
				<Stack align={"center"} textAlign="center">
					<Text color={"gray.500"} fontSize={"sm"} textTransform={"uppercase"}>
						{props.category}
					</Text>

					<Heading fontSize={"xl"} fontFamily={"body"} fontWeight={700}>
						{props.title}
					</Heading>

					<Text fontWeight={800} fontSize={"xl"}>
						${props.price}
					</Text>
				</Stack>

				<Flex justifyContent="end" alignItems="flex-end">
					<Button
						onClick={handleClick}
						transition="ease-in-out .35s"
						colorScheme="whatsapp"
					>
						See Detail
					</Button>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default ProductCard;
