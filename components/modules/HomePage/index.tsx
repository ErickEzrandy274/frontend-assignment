import React, { useEffect, useState } from "react";
import { Flex, Heading } from "@chakra-ui/react";
import { PrimaryLoader, ProductCard, ProductCardProps } from "@elements";
import { getProducts, useKeyword } from "@utils";
import { useQuery } from "react-query";

const HomePage = () => {
	const { data, isLoading } = useQuery("products", getProducts);
	const [filterProduct, setFilterProduct] = useState<ProductCardProps[]>();
	const { keyword } = useKeyword();

	useEffect(() => {
		if (!isLoading && data) {
			setFilterProduct(data.slice());
			if (keyword) {
				setFilterProduct(
					data
						.slice()
						.filter((item: any) => item.title.toLowerCase().includes(keyword))
				);
			}
		}
	}, [data, isLoading, keyword]);

	if (isLoading) {
		return <PrimaryLoader />;
	}

	return (
		<Flex
			flexWrap="wrap"
			p={8}
			gap={{ base: 6, md: 10 }}
			justifyContent="space-between"
			m="auto"
			textAlign="center"
		>
			{filterProduct?.length ? (
				filterProduct.map((product: ProductCardProps) => {
					return <ProductCard key={product.id} {...product} />;
				})
			) : (
				<Heading color="gray.500">There is no product named {keyword}!</Heading>
			)}
		</Flex>
	);
};

export default HomePage;
