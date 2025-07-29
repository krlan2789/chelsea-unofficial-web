import type INewsDto from "~/types/dtos/INewsDto";

const news = ref<INewsDto | undefined>();

function formatDate(): string {
	const date = new Date();
	const yyyy = date.getFullYear();
	const mm = String(date.getMonth()).padStart(2, "0");
	const dd = String(date.getDate()).padStart(2, "0");

	return `${yyyy}-${mm}-${dd}`;
}

function toQueryString(params: Record<string, string | number | boolean>): string {
	return Object.entries(params)
		.map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`)
		.join("&");
}

export async function useNews() {
	const date = formatDate();
	const query = toQueryString({
		q: "chelsea",
		searchIn: "title",
		language: "en",
		sortBy: "publishedAt",
		apiKey: "dc849d84b84e4c9695e6d0509833a9d5",
		from: date,
	});

	// const {
	// 	data,
	// 	error: fetchError,
	// } = await useAsyncData<INewsDto>("news-" + date, () =>
	// 	$fetch("https://newsapi.org/v2/everything?" + query, {
	// 		method: "GET",
	// 	}),
	// );
	// news.value = data.value;
	await $fetch<INewsDto | undefined>("https://newsapi.org/v2/everything?" + query)
		.then((res) => (news.value = res))
		.catch(async () => {
			const { host, protocol } = useCurrentHost();
			const urlRequest = `${protocol.value}//${host.value}/dummy/news/default.json`;
			await $fetch<INewsDto | undefined>(urlRequest)
				.then((res) => (news.value = res))
		});
	// console.log(news.value);

	return {
		// fetchError,
		data: news.value ? DtoMapper.mapNewsDtoToNewsProp(news.value) : null,
	};
}
