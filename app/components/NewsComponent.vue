<script lang="ts" setup>
import type INewsCardProp from "~/types/components/INewsCardProp";
import type INewsProp from "~/types/components/INewsProp";

let loadMore: () => void;

const { data, limit, lazy } = defineProps<INewsProp>();

const newsList = ref<INewsCardProp[] | null>(data ?? null);
const showCount = ref<number>(limit ?? 18);

const visibleNews = computed(() => newsList.value?.slice(0, showCount.value) ?? null);

onMounted(async () => {
	if (!data) {
		const { data: news } = await useNews();
		newsList.value = news;
	}

	loadMore = () => {
		const next = showCount.value + 18;
		showCount.value = Math.min(next, newsList.value?.length ?? 0);
		console.log("Loading more news:", showCount.value);
	};
});
</script>

<template>
	<ClientOnly v-if="newsList" fallback-tag="section">
		<GridLayoutComponent class="my-4 px-4 xl:px-0" title="Latest News">
			<LazyNewsCardComponent v-for="(news, index) in visibleNews" :key="index" :data="news" :class="{
				'2xl:col-span-2 2xl:card-side': index < 2,
			}" />
		</GridLayoutComponent>

		<div class="flex flex-col w-full h-auto px-4 xl:px-0 pb-8">
			<div class="divider divider-primary">
				<button v-if="lazy && showCount < newsList.length" @click="loadMore"
					class="btn btn-primary uppercase">Load more</button>
				<a v-else-if="!lazy" href="/news" class="btn btn-primary uppercase">More news</a>
			</div>
		</div>
	</ClientOnly>
	<section v-else class="w-full h-120 flex items-center justify-center">
		<span class="loading loading-bars loading-xl"></span>
	</section>
</template>
