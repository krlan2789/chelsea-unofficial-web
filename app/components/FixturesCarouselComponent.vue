<script setup lang="ts">
import type IFixtureCardProp from "~/types/components/IFixtureCardProp";
import FixtureCardComponent from "./FixtureCardComponent.vue";
import type IFixturesCarouselProp from "~/types/components/IFixturesCarouselProp";

const { data, limit } = defineProps<IFixturesCarouselProp>();

const teamFixtures = ref<IFixtureCardProp[] | null>(data ?? null);
const showCount = ref<number>(limit ?? 18);

const visibleFixtures = computed(() => teamFixtures.value?.slice(0, showCount.value) ?? null);

onMounted(async () => {
	if (!teamFixtures.value) {
		const { data: fixtures } = await useTeamFixtures();
		teamFixtures.value = fixtures;
	}
});
</script>

<template>
	<ClientOnly v-if="teamFixtures" fallback-tag="section">
		<CarouselComponent name="fixtures">
			<template #items>
				<FixtureCardComponent v-for="(fixture, index) in visibleFixtures" :key="index" :id="'' + fixture.fixtureId" class="carousel-item relative w-screen max-w-[480px]" :fixture />
			</template>
		</CarouselComponent>
	</ClientOnly>
	<section v-else class="w-full h-auto bg-neutral flex items-center justify-center">
		<span class="loading loading-bars loading-xl"></span>
	</section>
</template>
