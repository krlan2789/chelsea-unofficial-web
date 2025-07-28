<script setup lang="ts">
import type INewsCardProp from "~/types/components/INewsCardProp";

defineProps<{ data: INewsCardProp }>();
</script>

<template>
	<a :href="data.url" target="_blank" class="card bg-base-100 shadow-sm">
		<figure>
			<img v-if="data.imageUrl" :src="data.imageUrl" :alt="data.title" />
		</figure>
		<div class="card-body p-4">
			<h2 class="card-title font-medium text-base" :innerHTML="data.title" :aria-label="data.title"></h2>
			<p :innerHTML="data.description" :aria-label="data.description"></p>
			<div class="card-actions gap-1 justify-end">
				<div class="badge badge-neutral px-1 py-0.5 font-light text-xs" :aria-label="data.sourceName">{{
					data.sourceName }}</div>
				<div v-if="data.author" class="badge badge-outline px-1 py-0.5 font-light text-xs"
					:aria-label="data.author">{{ data.author }}</div>
				<div class="badge badge-outline px-1 py-0.5 font-light text-xs">
					{{
						data.publishedAt.toLocaleString([], {
							day: "numeric",
							month: "short",
							year: "numeric",
							weekday: "short",
						})
					}}
				</div>
			</div>
		</div>
	</a>
</template>
