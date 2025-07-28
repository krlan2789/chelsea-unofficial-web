<script lang="ts" setup>
import type ITrophyCardProp from '~/types/components/ITrophyCardProp';

defineProps<ITrophyCardProp>();
</script>

<template>
	<div class="card bg-transparent w-24 p-0">
		<figure v-if="data.image">
			<img :src="data.image" :alt="data.name" />
		</figure>
		<div class="card-body text-center p-2 gap-1">
			<h2 class="font-semibold leading-4" :innerHTML="data.name"></h2>
			<p v-if="!compact" class="text-sm">{{ data.year }}</p>
			<p v-if="!compact && data.description" class="text-sm">{{ data.description }}</p>
		</div>
	</div>
</template>
