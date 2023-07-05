import "@styles/globals.css";
import "@styles/loader.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { MainLayout } from "@modules";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { KeywordContextProvider, theme } from "@utils";

export default function App({ Component, pageProps }: AppProps) {
	const queryClient = new QueryClient();

	return (
		<QueryClientProvider client={queryClient}>
			<ChakraProvider theme={theme}>
				<KeywordContextProvider>
					<MainLayout>
						<Component {...pageProps} />
					</MainLayout>
				</KeywordContextProvider>
			</ChakraProvider>
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
}
