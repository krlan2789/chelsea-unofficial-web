import type { NuxtError } from "#app";
import type ITeamSquadDto from "~/types/dtos/ITeamSquadDto";

const fetchError = ref<NuxtError<unknown> | undefined>();

export const useTeamSquad = () => {
	const {
		data,
		error: fetchError,
		refresh,
	} = useAsyncData<ITeamSquadDto>("team-squad-latest", () =>
		$fetch(
			"/api/football/team-squad",
			// "http s://v3.football.api-sports.io/players/squads?team=39",
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
		data: data.value ? DtoMapper.mapTeamSquadDtoToTeamSquadProp(data.value) : null,
		refresh,
	};
}
