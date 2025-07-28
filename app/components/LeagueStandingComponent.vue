<script lang="ts" setup>
import type { ILeagueStanding } from "~/types/components/ILeagueStandingProp";
import type ILeagueStandingProp from "~/types/components/ILeagueStandingProp";

const { data, limit, compact } = defineProps<ILeagueStandingProp>();
const { data: standing } = useLeagueStandings();

const leagueStanding = ref<ILeagueStanding | null>(data ?? standing ?? null);
</script>

<template>
	<ClientOnly v-if="leagueStanding" fallback-tag="section">
		<section class="my-8 px-4 xl:px-0 w-full h-auto flex flex-col">
			<div class="section-header justify-center">
				<h2>{{ leagueStanding.name }} Standings</h2>
			</div>
			<div class="overflow-x-auto h-auto w-full">
				<table v-if="leagueStanding.standings" class="table table-md table-pin-cols table-zebra">
					<thead>
						<tr>
							<th>Rank</th>
							<td class="text-center" :class="{
								'min-w-[192px] lg:min-w-3xs': !compact,
								'min-w-[144px] lg:min-w-[192px]': compact,
							}">Name</td>
							<td class="text-center">Point</td>
							<td class="text-center">GP</td>
							<td v-if="!compact" class="text-center">Win</td>
							<td v-if="!compact" class="text-center">Draw</td>
							<td v-if="!compact" class="text-center">Lose</td>
							<td v-if="!compact" class="text-center">Goals</td>
							<td class="text-center">GD</td>
						</tr>
					</thead>
					<tbody>
						<template v-for="(standing, index) in leagueStanding.standings" :key="index">
							<tr v-if="!limit || index < limit">
								<th class="-translate-x-0.5">{{ standing.rank }}</th>
								<td class="text-center" :class="{
									'font-bold text-primary text-lg': standing.teamId == 49,
									'font-semibold': standing.teamId != 49,
								}">
									{{ standing.teamName }}
								</td>
								<td class="text-center font-bold text-lg">{{ standing.point }}</td>
								<td class="text-center font-medium">{{ standing.played }}</td>
								<td v-if="!compact" class="text-center font-medium">{{ standing.win }}</td>
								<td v-if="!compact" class="text-center font-medium">{{ standing.draw }}</td>
								<td v-if="!compact" class="text-center font-medium">{{ standing.lose }}</td>
								<td v-if="!compact" class="text-center font-medium">{{ standing.goal }}-{{
									standing.conceaded }}</td>
								<td class="text-center font-medium">{{ standing.goalDiff }}</td>
							</tr>
						</template>
					</tbody>
				</table>
			</div>
			<div v-if="limit" class="flex flex-col w-full h-auto pt-8">
				<div class="divider divider-primary">
					<a href="/competition/league" class="btn btn-primary uppercase">Full Standings</a>
				</div>
			</div>
		</section>
	</ClientOnly>
	<section v-else class="w-full h-[80vh] flex items-center justify-center">
		<span class="loading loading-bars loading-xl"></span>
	</section>
</template>
