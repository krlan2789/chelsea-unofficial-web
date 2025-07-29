<script lang="ts" setup>
import type IFixtureCardProp from "~/types/components/IFixtureCardProp";

const { fixture } = defineProps<{ fixture: IFixtureCardProp }>();

const isFixtureDone = computed(() => {
	return typeof fixture.homeTeamScore == "number" && typeof fixture.awayTeamScore == "number";
});
</script>

<template>
	<div class="card bg-neutral text-neutral-content">
		<div class="card-body items-center text-center gap-4">
			<!-- Fixture Information -->
			<div class="flex flex-col gap-1 w-full h-18 justist">
				<h2 class="font-bold" :aria-label="fixture.competitionName">{{ fixture.competitionName }}</h2>
				<p
					:class="{
						'text-xs opacity-80': isFixtureDone,
						'text-sm font-semibold': !isFixtureDone,
					}"
				>
					{{
						fixture.matchDate.toLocaleDateString([], {
							day: "numeric",
							month: "long",
							year: "numeric",
							weekday: "long",
						})
					}}
				</p>
				<p class="text-xs font-light opacity-80" :aria-label="fixture.venue">{{ fixture.venue }}</p>
			</div>
			<!-- Fixture Information -->

			<div class="flex flex-row justify-center items-center gap-2">
				<!-- Home side -->
				<div class="flex flex-5/12 min-w-28 flex-col w-auto gap-2 justify-start items-center">
					<img class="size-10 aspect-auto" :src="'https://media.api-sports.io/football/teams/' + fixture.homeTeamId + '.png'" :alt="fixture.homeTeamName" />
					<p class="text-sm h-8 w-auto leading-loose min-w-max" :aria-label="fixture.homeTeamName">{{ fixture.homeTeamName }}</p>
				</div>
				<!-- Home side -->

				<!-- Fixture results -->
				<div class="flex flex-2/12 flex-col min-w-16 max-w-16 gap-2 justify-start items-center">
					<div class="text-2xl h-10 w-full flex flex-row gap-1 justify-center items-center">
						<template v-if="isFixtureDone">
							<p class="grow badge badge-soft badge-neutral badge-xl !p-0 text-2xl">{{ fixture.homeTeamScore ?? 0 }}</p>
							<p class="grow badge badge-soft badge-neutral badge-xl !p-0 text-2xl">{{ fixture.awayTeamScore ?? 0 }}</p>
						</template>
						<template v-else>VS</template>
					</div>
					<div class="justify-end w-full h-8">
						<a v-if="isFixtureDone" :href="'/matches/' + fixture.fixtureId" class="btn btn-accent h-full w-full leading-40">Statistic</a>
						<template v-else>
							<p class="text-xl w-full text-center">
								{{
									fixture.matchDate.toLocaleTimeString([], {
										hour: "2-digit",
										minute: "2-digit",
										hour12: false,
									})
								}}
							</p>
						</template>
					</div>
				</div>
				<!-- Fixture results -->

				<!-- Away side -->
				<div class="flex flex-5/12 min-w-28 flex-col w-auto gap-2 justify-start items-center">
					<img class="size-10 aspect-auto" :src="'https://media.api-sports.io/football/teams/' + fixture.awayTeamId + '.png'" :alt="fixture.awayTeamName" />
					<p class="text-sm h-8 w-auto leading-loose min-w-max" :aria-label="fixture.awayTeamName">
						{{ fixture.awayTeamName }}
					</p>
				</div>
				<!-- Away side -->
			</div>
		</div>
	</div>
</template>
