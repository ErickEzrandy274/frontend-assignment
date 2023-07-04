import {
	Box,
	Center,
	useColorModeValue,
	Heading,
	Text,
	Stack,
	Image,
} from "@chakra-ui/react";
import { ProductCardProps } from "./interface";

const ProductCard: React.FC<ProductCardProps> = (props) => {
	return (
		<Box
			role="group"
			p={6}
			maxW="330px"
			w="full"
			bg={useColorModeValue("white", "gray.800")}
			boxShadow="2xl"
			rounded="2xl"
			pos="relative"
			zIndex={1}
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
			<Stack pt={10} align={"center"} textAlign="center">
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
		</Box>
	);
};

export default ProductCard;
