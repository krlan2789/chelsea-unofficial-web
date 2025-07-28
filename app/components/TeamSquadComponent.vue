<script lang="ts" setup>
import type IPlayerCardProp from '~/types/components/IPlayerCardProp';
import type ITeamSquadProp from '~/types/components/ITeamSquadProp';

const { data } = defineProps<ITeamSquadProp>();
const { data: squads } = useTeamSquad();

const squadList = ref<IPlayerCardProp[]>(data ?? squads ?? []);
</script>

<template>
	<ClientOnly v-if="squadList" fallback-tag="section">
		<GridLayoutComponent class="my-4 px-4 xl:px-0" title="Team Squad" moreItems>
			<PlayerCardComponent v-for="(player, index) in squadList" :key="index" :data="player" />
		</GridLayoutComponent>
	</ClientOnly>
	<section v-else class="w-full h-120 flex items-center justify-center">
		<span class="loading loading-bars loading-xl"></span>
	</section>
</template>