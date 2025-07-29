// import type { NuxtError } from "#app";
import type ITeamSquadDto from "~/types/dtos/ITeamSquadDto";

const squad = ref<ITeamSquadDto | undefined>();
// const fetchError = ref<NuxtError<unknown> | undefined>();

export const useTeamSquad = async () => {
	if (!squad.value) {
		// const {
		// 	data,
		// 	error: fetchError,
		// 	refresh,
		// } = useAsyncData<ITeamSquadDto>("team-squad-latest", () =>
		// 	$fetch(
		// 		"/dummy/football/team_squad.json",
		// 		// "/api/football/team-squad",
		// 		// "http s://v3.football.api-sports.io/players/squads?team=39",
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
		const urlRequest = `${protocol.value}//${host.value}/dummy/football/team_squad.json`;
		// console.log(urlRequest);
		await $fetch<ITeamSquadDto | undefined>(urlRequest).then((res) => (squad.value = res));
	}

	return {
		// fetchError,
		data: squad.value ? DtoMapper.mapTeamSquadDtoToTeamSquadProp(squad.value) : null,
	};
};
