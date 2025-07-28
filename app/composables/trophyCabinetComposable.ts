import type { NuxtError } from "#app";
import type ITrophyDto from "~/types/dtos/ITrophyDto";

const trophies = ref<ITrophyDto | undefined>();
const fetchError = ref<NuxtError<unknown> | undefined>();

export const useTrophyCabinet = () => {
	if (!trophies.value) {
		const {
			data,
			error,
		} = useAsyncData<ITrophyDto>("trophy-cabinet", () =>
			$fetch(
				"/api/football/trophies/cabinet",
				{
					method: "GET",
				},
			),
		);

		fetchError.value = error.value;
		trophies.value = data.value;
	}

	return {
		fetchError,
		data: trophies.value ? DtoMapper.mapTrophyDtoToTrophyProp(trophies.value) : null,
	};
}
