import type ILeagueStandingDto from "~/types/dtos/ILeagueStandingDto";

export function useLeagueStandings() {
	const year = new Date().getFullYear() - 2;
	const {
		data,
		error: fetchError,
		refresh,
	} = useAsyncData<ILeagueStandingDto>("league-standings-" + year, () =>
		$fetch(
			"/api/football/standing/" + year,
			// "https://v3.football.api-sports.io/standings?league=39&season=" + year,
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
		data: data.value ? DtoMapper.mapLeagueStandingDtoToLeagueStandingProp(data.value) : null,
		refresh,
	};
}
