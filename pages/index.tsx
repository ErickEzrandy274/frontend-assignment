import { HomePage } from "@modules";
import Head from "next/head";
import React from "react";

const Home = () => {
	return (
		<>
			<Head>
				<title>OnlineStore</title>
			</Head>
			<HomePage />
		</>
	);
};

export default Home;
