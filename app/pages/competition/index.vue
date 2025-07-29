<script lang="ts" setup></script>

<template>
	<div class="grid lg:grid-cols-5 gap-4">
		<FixturesListComponent class="lg:col-span-3" />
		<LeagueStandingComponent class="lg:col-span-2" compact :limit="20" />
	</div>
</template>
