<script lang="ts" setup>
import { ClientOnly } from '#components';
import type ITrophyCabinetProp from '~/types/components/ITrophyCabinetProp';
import type { ITrophyCard } from '~/types/components/ITrophyCardProp';

const { data } = defineProps<ITrophyCabinetProp>();
const trophyListByYear = ref<Record<number, ITrophyCard[]>>({});
const trophyListByName = ref<Record<string, ITrophyCard[]>>({});

function groupByYear<T extends { year: number }>(list: T[]): Record<number, T[]> {
	return list.reduce((acc, item) => {
		const y = item.year
		acc[y] = acc[y] || []
		acc[y].push(item)
		return acc
	}, {} as Record<number, T[]>)
}

function groupByName<T extends { name: string }>(list: T[]): Record<string, T[]> {
	return list.reduce((acc, item) => {
		const n = item.name
		acc[n] = acc[n] || []
		acc[n].push(item)
		return acc
	}, {} as Record<string, T[]>)
}

if (!data) {
	const { data: trophies } = useTrophyCabinet();
	if (trophies) {
		trophyListByYear.value = groupByYear(trophies);
		trophyListByName.value = groupByName(trophies);
	}
} else {
	trophyListByYear.value = groupByYear(data);
	trophyListByName.value = groupByName(data);
}
</script>

<template>
	<ClientOnly v-if="trophyListByYear" fallback-tag="section">
		<section class="mt-8 px-4 xl:px-0">
			<div class="section-header">
				<h2>Trophies</h2>
			</div>
			<div class="overflow-x-auto h-auto w-full">
				<table class="table table-md table-pin-cols table-zebra">
					<thead>
						<tr>
							<th class="text-left sm:min-w-3xs">Name</th>
							<td class="text-center">Region</td>
							<td class="text-center">Year | Season</td>
						</tr>
					</thead>
					<tbody>
						<tr v-for="([trophyName, items], index) in Object.entries(trophyListByName)" :key="index">
							<th class="-translate-x-0.5">
								{{ trophyName }}
							</th>
							<td class="text-center font-medium">{{ items.at(0)?.region }}</td>
							<td class="text-center font-medium">{{items.map(item => item.year).join(', ')}}</td>
						</tr>
					</tbody>
				</table>
			</div>
		</section>

		<section class="mt-16 px-4 xl:px-0">
			<div class="section-header">
				<h2>History Timeline</h2>
			</div>
			<ul
				class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical flex-col-reverse mt-8 px-8 md:px-0">
				<li v-for="([year, items], index) in Object.entries(trophyListByYear)" :key="index"
					class="border-0 bg-transparent">
					<hr v-if="index < Object.entries(trophyListByYear).length - 1" />
					<div class="timeline-middle text-primary">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
							<path fill-rule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
								clip-rule="evenodd" />
						</svg>
					</div>
					<div class="flex flex-col mx-8" :class="{
						'timeline-end': index % 2 == 0,
						'timeline-start': index % 2 != 0,
					}">
						<time class="text-center font-semibold pb-2">{{ year }}</time>
						<div class="flex flex-wrap gap-4">
							<TrophyCardComponent v-for="(item, index2) in items" :key="index2" :data="item" compact />
						</div>
					</div>
					<hr />
				</li>
			</ul>
		</section>
	</ClientOnly>
	<section v-else class="w-full h-120 flex items-center justify-center">
		<span class="loading loading-bars loading-xl"></span>
	</section>
</template>