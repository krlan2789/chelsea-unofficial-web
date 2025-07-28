import type INewsDto from "~/types/dtos/INewsDto";

function formatDate(): string {
	const date = new Date();
	const yyyy = date.getFullYear()
	const mm = String(date.getMonth()).padStart(2, '0') // Months are zero-based
	const dd = String(date.getDate()).padStart(2, '0')

	return `${yyyy}-${mm}-${dd}`
}

function toQueryString(params: Record<string, string | number | boolean>): string {
	return Object.entries(params)
		.map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`)
		.join('&')
}

export function useNews() {
	const date = formatDate();
	const query = toQueryString({
		q: "chelsea",
		searchIn: 'title',
		language: 'en',
		sortBy: 'publishedAt',
		apiKey: 'dc849d84b84e4c9695e6d0509833a9d5',
		from: date,
	})


	const {
		data,
		error: fetchError,
		refresh,
	} = useAsyncData<INewsDto>("news-" + date, () =>
		$fetch(
			"https://newsapi.org/v2/everything?" + query,
			{
				method: "GET",
			},
		),
	);

	return {
		fetchError,
		data: data.value ? DtoMapper.mapNewsDtoToNewsProp(data.value) : null,
		refresh,
	};
}
