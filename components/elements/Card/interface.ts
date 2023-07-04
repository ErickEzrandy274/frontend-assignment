export interface ProductCardProps {
	id: string;
	title: string;
	price: number;
	image: string;
	category: string;
	description: string;
	rating: {
		rate: number;
		count: number;
	};
}
