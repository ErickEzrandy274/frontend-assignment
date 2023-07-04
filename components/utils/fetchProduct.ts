import axios from "axios";
import toast from "react-hot-toast";

export const getProducts = async () => {
	toast.loading("Fetching all products...");
	try {
		console.log(`${process.env.NEXT_PUBLIC_URL}/products`);
		const { data } = await axios.get(`${process.env.NEXT_PUBLIC_URL}/products`);
		toast.dismiss();
		toast.success("Successfully fetching all products!");
		return data;
	} catch (error: any) {
		toast.dismiss();
		toast.error(error.message);
	}
};
