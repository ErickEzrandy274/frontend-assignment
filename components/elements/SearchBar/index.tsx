import { SearchIcon } from "@chakra-ui/icons";
import { Flex, Input } from "@chakra-ui/react";
import { useKeyword } from "@utils";
import React, { BaseSyntheticEvent, useState } from "react";

const SearchBar = () => {
	const [keyword, setKeyword] = useState<string>("");
	const { updateKeyword } = useKeyword();
	const handleChange = (e: BaseSyntheticEvent) => {
		setKeyword(e.target.value);
	};

	const handleSearch = (e: any) => {
		if (e.key === "Enter") {
			updateKeyword(keyword);
		}
	};

	return (
		<Flex
			alignItems="center"
			border="2px solid white"
			px={3}
			py={2}
			w={{ md: "72" }}
			gap={3}
			rounded="xl"
		>
			<SearchIcon />

			<Input
				value={keyword}
				border="none"
				variant="unstyled"
				onKeyDown={handleSearch}
				onChange={handleChange}
				placeholder="Find the product here..."
				sx={{
					"&::placeholder": {
						color: "black",
					},
				}}
			/>
		</Flex>
	);
};

export default SearchBar;
