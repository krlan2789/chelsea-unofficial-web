export default interface ITrophyDto {
	trophies: ITrophy[];
}

export interface ITrophy {
	name: string;
	region: string;
	year: number;
	status: string;
	description?: string;
	image?: string;
}