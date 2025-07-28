export default interface ILeagueStandingDto {
	get: string;
	parameters: IParameters;
	errors: any[];
	results: number;
	paging: IPaging;
	response: IResponse[];
}

export interface IParameters {
	league: string;
	season: string;
}

export interface IPaging {
	current: number;
	total: number;
}

export interface IResponse {
	league: ILeague;
}

export interface ILeague {
	id: number;
	name: string;
	country: string;
	logo: string;
	flag: string;
	season: number;
	standings: IStanding[][];
}

export interface IStanding {
	rank: number;
	team: ITeam;
	points: number;
	goalsDiff: number;
	group: string;
	form: string;
	status: string;
	description?: string;
	all: IAll;
	home: IHome;
	away: IAway;
	update: string;
}

export interface ITeam {
	id: number;
	name: string;
	logo: string;
}

export interface IAll {
	played: number;
	win: number;
	draw: number;
	lose: number;
	goals: IGoals;
}

export interface IGoals {
	for: number;
	against: number;
}

export interface IHome {
	played: number;
	win: number;
	draw: number;
	lose: number;
	goals: IGoals2;
}

export interface IGoals2 {
	for: number;
	against: number;
}

export interface IAway {
	played: number;
	win: number;
	draw: number;
	lose: number;
	goals: IGoals3;
}

export interface IGoals3 {
	for: number;
	against: number;
}
