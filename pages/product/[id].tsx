import React from "react";
import { DetailProductPage } from "@modules";
import { getProductById } from "@utils";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { PrimaryLoader } from "@elements";
import { Heading } from "@chakra-ui/react";

const ProductDetails = () => {
	const { query } = useRouter();
	const { data, isLoading } = useQuery(`detail product ${query.id}`, () =>
		getProductById(query.id)
	);

	if (isLoading) {
		return <PrimaryLoader />;
	}

	return data ? (
		<DetailProductPage data={data} />
	) : (
		<Heading m="auto" color="gray.500">
			There is no product with id {query.id}!
		</Heading>
	);
};

export default ProductDetails;
