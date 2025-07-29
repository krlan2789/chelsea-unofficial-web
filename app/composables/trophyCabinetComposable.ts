// import type { NuxtError } from "#app";
import type ITrophyDto from "~/types/dtos/ITrophyDto";

const trophies = ref<ITrophyDto | undefined>();
// const fetchError = ref<NuxtError<unknown> | undefined>();

export const useTrophyCabinet = async () => {
	if (!trophies.value) {
		// const {
		// 	data,
		// 	error,
		// } = useAsyncData<ITrophyDto>("trophy-cabinet", () =>
		// 	$fetch(
		// 		"/dummy/football/trophy_cabinet.json",
		// 		// "/api/football/trophies/cabinet",
		// 		{
		// 			method: "GET",
		// 		},
		// 	),
		// );

		// const url = new URL(import.meta.url);
		const { host, protocol } = useCurrentHost();
		const urlRequest = `${protocol.value}//${host.value}/dummy/football/trophy_cabinet.json`;
		// console.log(urlRequest);
		const data = await $fetch<ITrophyDto | undefined>(urlRequest).then((res) => (trophies.value = res));
	}

	return {
		// fetchError,
		data: trophies.value ? DtoMapper.mapTrophyDtoToTrophyProp(trophies.value) : null,
	};
};
