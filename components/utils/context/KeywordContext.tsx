import { createContext, useContext, useState } from "react";
import { MainLayoutProps } from "@modules";

const KeywordContext = createContext<any>({});

export const useKeyword = () => useContext(KeywordContext);

export const KeywordContextProvider: React.FC<MainLayoutProps> = ({
	children,
}) => {
	const [keyword, setKeyword] = useState<string>("");

	const updateKeyword = (input: string) => {
		setKeyword(input);
	};

	return (
		<KeywordContext.Provider value={{ updateKeyword, keyword }}>
			{children}
		</KeywordContext.Provider>
	);
};
