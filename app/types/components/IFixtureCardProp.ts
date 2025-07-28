export default interface IFixtureCardProp {
	fixtureId: number;
	competitionName: string;
	venue: string;
	matchDate: Date;
	homeTeamId: number;
	homeTeamName: string;
	awayTeamId: number;
	awayTeamName: string;
	homeTeamScore?: number | null;
	awayTeamScore?: number | null;
}
