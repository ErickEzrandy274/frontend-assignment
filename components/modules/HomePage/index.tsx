import React from "react";
import { Flex } from "@chakra-ui/react";
import { ProductCard, ProductCardProps } from "@elements";
import { getProducts } from "@utils";
import { useQuery } from "react-query";

const HomePage = () => {
	const { data } = useQuery("products", getProducts);

	return (
		<Flex
			flexWrap="wrap"
			p={8}
			gap={{ base: 6, md: 10 }}
			justifyContent="space-between"
		>
			{data?.map((product: ProductCardProps) => {
				return <ProductCard key={product.id} {...product} />;
			})}
		</Flex>
	);
};

export default HomePage;
