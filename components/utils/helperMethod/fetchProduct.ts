import axios from "axios";
import toast from "react-hot-toast";

export const getProducts = async () => {
	try {
		const { data } = await axios.get(`${process.env.NEXT_PUBLIC_URL}/products`);
		toast.success("Successfully fetching all products!");
		return data;
	} catch (error: any) {
		toast.error(error.message);
	}
};

export const getProductById = async (id: number) => {
	try {
		const { data } = await axios.get(
			`${process.env.NEXT_PUBLIC_URL}/products/${id}`
		);
		toast.success("Successfully fetching detail product!");
		return data;
	} catch (error: any) {
		toast.error(error.message);
	}
};