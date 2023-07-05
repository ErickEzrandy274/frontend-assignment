import React, { useEffect, useState } from "react";
import { Flex } from "@chakra-ui/react";
import { ProductCard, ProductCardProps } from "@elements";
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

	return (
		<Flex
			flexWrap="wrap"
			p={8}
			gap={{ base: 6, md: 10 }}
			justifyContent="space-between"
		>
			{filterProduct?.map((product: ProductCardProps) => {
				return <ProductCard key={product.id} {...product} />;
			})}
		</Flex>
	);
};

export default HomePage;
