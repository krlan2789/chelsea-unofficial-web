export default interface INewsCardProp {
	title: string;
	author: string;
	description: string;
	content: string;
	publishedAt: Date;
	sourceName: string;
	url?: string;
	imageUrl?: string;
}
