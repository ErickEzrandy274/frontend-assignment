import "@styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { MainLayout } from "@modules";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider>
			<MainLayout>
				<Component {...pageProps} />
			</MainLayout>
		</ChakraProvider>
	);
}
