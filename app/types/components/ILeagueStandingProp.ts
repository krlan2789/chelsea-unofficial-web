export default interface ILeagueStandingProp {
	limit?: number;
	compact?: boolean;
	data?: ILeagueStanding;
}

export interface ILeagueStanding {
	name: string;
	country: string;
	logo: string;
	season: string;
	standings: IStanding[];
}

export interface IStanding {
	rank: number;
	teamId: number;
	teamName: string;
	point: number;
	played: number;
	win: number;
	draw: number;
	lose: number;
	goal: number;
	conceaded: number;
	goalDiff: number;
	form: string;
	status: string;
	groupName?: string;
	description?: string;
}
