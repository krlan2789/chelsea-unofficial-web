import type ITeamFixtureDto from "~/types/dtos/ITeamFixtureDto";

export function useTeamFixtures() {
	const year1 = new Date().getFullYear() - 4;
	const year2 = new Date().getFullYear() - 2;
	const {
		data,
		error: fetchError,
		refresh,
	} = useAsyncData<ITeamFixtureDto>(`team-fixtures-${year1}-${year2}`, () =>
		$fetch(
			`/api/football/fixtures/${year1}-${year2}`,
			// "https://v3.football.api-sports.io/fixtures?league=39&season=" + year,
			{
				method: "GET",
				// "headers": {
				// 	"x-rapidapi-host": "v3.football.api-sports.io",
				// 	"x-rapidapi-key": "ff4234e181088aa62ed5c0d080fb7cb1"
				// },
			},
		),
	);

	return {
		fetchError,
		data: data.value ? DtoMapper.mapFixturesDtoToFixturesProp(data.value) : null,
		refresh,
	};
}
