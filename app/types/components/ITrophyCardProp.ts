export default interface ITrophyCardProp {
	data: ITrophyCard;
	compact?: boolean;
}

export interface ITrophyCard {
	name: string;
	region: string;
	year: number;
	status: string;
	description?: string;
	image?: string;
}
