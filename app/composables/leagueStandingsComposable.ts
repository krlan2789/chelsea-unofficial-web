import type ILeagueStandingDto from "~/types/dtos/ILeagueStandingDto";

const standing = ref<ILeagueStandingDto | undefined>();

export const useLeagueStandings = async () => {
	if (!standing.value) {
		// const year = new Date().getFullYear() - 2;
		// const {
		// 	data,
		// 	error: fetchError,
		// 	refresh,
		// } = useAsyncData<ILeagueStandingDto>("league-standings-" + year, () =>
		// 	$fetch(
		// 		"/dummy/football/standing_2023.json",
		// 		// "/api/football/standing/" + year,
		// 		// "https://v3.football.api-sports.io/standings?league=39&season=" + year,
		// 		{
		// 			method: "GET",
		// 			// "headers": {
		// 			// 	"x-rapidapi-host": "v3.football.api-sports.io",
		// 			// 	"x-rapidapi-key": "ff4234e181088aa62ed5c0d080fb7cb1"
		// 			// },
		// 		},
		// 	),
		// );

		// const url = new URL(import.meta.url);
		const { host, protocol } = useCurrentHost();
		const urlRequest = `${protocol.value}//${host.value}/dummy/football/standing_2023.json`;
		// console.log(urlRequest);
		await $fetch<ILeagueStandingDto | undefined>(urlRequest).then((res) => (standing.value = res));
		// console.log(standing.value);
	}

	return {
		// fetchError,
		data: standing.value ? DtoMapper.mapLeagueStandingDtoToLeagueStandingProp(standing.value) : null,
	};
};
