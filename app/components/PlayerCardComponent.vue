<script lang="ts" setup>
import type IPlayerCardProp from '~/types/components/IPlayerCardProp';

defineProps<{ data: IPlayerCardProp }>();
</script>

<template>
	<a :href="data.id" target="_blank" class="card bg-base-100 shadow-sm">
		<figure class="w-full h-auto">
			<img v-if="data.image" :src="data.image" :alt="data.name" class="w-full aspect-square" />
		</figure>
		<div class="card-body p-4">
			<h2 class="card-title font-medium text-base" :aria-label="data.name">
				{{ data.name }}
			</h2>
			<p :innerHTML="data.age + ' years'" :aria-label="'' + data.age"></p>
			<div class="card-actions gap-1 justify-end">
				<div class="badge font-semibold" :class="{
					'badge-error': data.position.toLocaleLowerCase() === 'attacker',
					'badge-success': data.position.toLocaleLowerCase() === 'midfielder',
					'badge-info': data.position.toLocaleLowerCase() === 'defender',
					'badge-warning': data.position.toLocaleLowerCase() === 'goalkeeper',
				}" :aria-label="data.position">{{
					data.position }}</div>
				<div class="badge badge-primary font-semibold" :aria-label="'' + data.number"
					:innerHTML="'' + data.number"></div>
			</div>
		</div>
	</a>
</template>