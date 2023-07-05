import { StarIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { ProductCardProps } from "@elements";
import React from "react";

const DetailProduct: React.FC<{ data: ProductCardProps }> = ({ data }) => {
	return (
		<Flex flexDir="column" gap={5} p={8} pt={0} m="auto">
			<Heading fontSize="4xl" textAlign="center">
				Product Detail
			</Heading>

			<Flex
				rounded="xl"
				flexDir={{ base: "column", md: "row" }}
				w={{ md: "75%" }}
				border="2px solid gray"
				p={5}
				m="auto"
				gap={5}
			>
				<Image
					rounded="lg"
					height={230}
					width={282}
					my="auto"
					blendMode="darken"
					objectFit="contain"
					src={data.image}
					alt={data.title}
				/>

				<Flex flexDir="column" gap={3} fontWeight="medium">
					<Heading
						fontSize={{ base: "3xl", md: "4xl" }}
						textAlign={{ base: "center", md: "start" }}
					>
						{data.title}
					</Heading>
					<Text>Category: {data.category}</Text>
					<Text>Description: {data.description}</Text>
					<Text>Price: Only ${data.price}</Text>

					<Box display="flex" mt="2" alignItems="center">
						{Array(5)
							.fill("")
							.map((_, i) => (
								<StarIcon
									key={i}
									color={i < data.rating.rate ? "yellow.500" : "gray.300"}
								/>
							))}
						<Box
							as="span"
							ml="2"
							color="gray.600"
							fontSize="sm"
							fontWeight="medium"
						>
							{data.rating.count} reviews
						</Box>
					</Box>

					<Flex justifyContent="flex-end">
						<Button rounded="lg" colorScheme="facebook">
							Buy Now
						</Button>
					</Flex>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default DetailProduct;
