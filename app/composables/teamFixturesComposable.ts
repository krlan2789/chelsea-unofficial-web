import type ITeamFixtureDto from "~/types/dtos/ITeamFixtureDto";

const teamFixtures = ref<ITeamFixtureDto | undefined>();

export const useTeamFixtures = async () => {
	if (!teamFixtures.value) {
		// const year1 = new Date().getFullYear() - 4;
		// const year2 = new Date().getFullYear() - 2;
		// const {
		// 	data,
		// 	error: fetchError,
		// } = useAsyncData<ITeamFixtureDto>(`team-fixtures-${year1}-${year2}`, () =>
		// 	$fetch(
		// 		"/dummy/football/fixtures_2021_2023.json",
		// 		// `/api/football/fixtures/${year1}-${year2}`,
		// 		// "https://v3.football.api-sports.io/fixtures?league=39&season=" + year,
		// 		{
		// 			method: "GET",
		// 			// "headers": {
		// 			// 	"x-rapidapi-host": "v3.football.api-sports.io",
		// 			// 	"x-rapidapi-key": "ff4234e181088aa62ed5c0d080fb7cb1"
		// 			// },
		// 		},
		// 	)
		// );
		// const url = new URL(import.meta.url);
		const { host, protocol } = useCurrentHost();
		const urlRequest = `${protocol.value}//${host.value}/dummy/football/fixtures_2021_2023.json`;
		// console.log(urlRequest);
		await $fetch<ITeamFixtureDto | undefined>(urlRequest).then((res) => (teamFixtures.value = res));
		// console.log(teamFixtures.value);
	}

	return {
		// fetchError,
		data: teamFixtures.value ? DtoMapper.mapFixturesDtoToFixturesProp(teamFixtures.value) : null,
	};
};
