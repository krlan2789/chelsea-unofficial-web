<script setup lang="ts">
import type IFixtureCardProp from "~/types/components/IFixtureCardProp";
import FixtureCardComponent from "./FixtureCardComponent.vue";
import type IFixturesCarouselProp from "~/types/components/IFixturesCarouselProp";

const { data, limit } = defineProps<IFixturesCarouselProp>();

const teamFixtures = ref<IFixtureCardProp[] | null>(data ?? null);
const showCount = ref<number>(limit ?? 18);

const visibleFixtures = computed(() => teamFixtures.value?.slice(0, showCount.value) ?? []);
onMounted(async () => {
	if (!teamFixtures.value) {
		const { data: fixtures } = await useTeamFixtures();
		teamFixtures.value = fixtures;
	}
});
</script>

<template>
	<ClientOnly v-if="teamFixtures" fallback-tag="section">
		<GridLayoutComponent title="Fixtures" align-title="center" class="px-4 xl:px-0" compact>
			<FixtureCardComponent v-for="(fixture, index) in visibleFixtures" :key="index" :id="'' + fixture.fixtureId"
				class="carousel-item relative w-auto" :fixture />
		</GridLayoutComponent>
	</ClientOnly>
	<section v-else class="w-full h-auto bg-neutral flex items-center justify-center">
		<span class="loading loading-bars loading-xl"></span>
	</section>
</template>
