<script setup lang="ts">
let prevClick: () => void;
let nextClick: () => void;

onMounted(() => {
	const { prev, next } = useHorizontalScrollable("#carousel-main", "#carousel-main .carousel-item", "#carousel-main-btn-prev", "#carousel-main-btn-next");

	prevClick = prev;
	nextClick = next;
});
</script>

<template>
	<div class="relative">
		<div id="carousel-main" class="carousel carousel-center overflow-x-auto size-full max-h-full">
			<div class="carousel-item relative w-full pt-24">
				<img src="/img/1.jpg" class="w-full object-cover origin-center" />
				<div class="absolute flex flex-col gap-4 md:gap-6 justify-end pb-8 px-4 md:pb-12 md:px-8 inset-0 bg-gradient-to-t from-neutral via-neutral/88 via-30% to-transparent text-center text-neutral-content">
					<h1 class="text-2xl md:text-4xl font-semibold">For the first time to winning UEFA Champions League</h1>
					<p class="text-base md:text-lg">Beat the favorite, FC Bayern Munich, at their home</p>
				</div>
			</div>
			<div class="carousel-item relative w-full pt-24">
				<img src="/img/2.webp" class="w-full object-cover origin-center" />
				<div class="absolute flex flex-col gap-4 md:gap-6 justify-end pb-8 px-4 md:pb-12 md:px-8 inset-0 bg-gradient-to-t from-neutral via-neutral/88 via-30% to-transparent text-center text-neutral-content">
					<h1 class="text-2xl md:text-4xl font-semibold">Winning the first edition of FIFA Club World Cup</h1>
					<p class="text-base md:text-lg">Beat Paris Saint-Germain FC, a team with an outstanding performance in that season</p>
				</div>
			</div>
			<div class="carousel-item relative w-full pt-24">
				<img src="/img/3.webp" class="w-full object-cover origin-center" />
				<div class="absolute flex flex-col gap-4 md:gap-6 justify-end pb-8 px-4 md:pb-12 md:px-8 inset-0 bg-gradient-to-t from-neutral via-neutral/88 via-30% to-transparent text-center text-neutral-content">
					<h1 class="text-2xl md:text-4xl font-semibold">Another incredible season in Women's Super League</h1>
					<p class="text-base md:text-lg">Go unbeaten in WSL season, becoming first team to have two 'Invincible' campaigns</p>
				</div>
			</div>
			<div class="carousel-item relative w-full pt-24">
				<img src="/img/4.jpg" class="w-full object-cover origin-center" />
				<div class="absolute flex flex-col gap-4 md:gap-6 justify-end pb-8 px-4 md:pb-12 md:px-8 inset-0 bg-gradient-to-t from-neutral via-neutral/88 via-30% to-transparent text-center text-neutral-content">
					<h1 class="text-2xl md:text-4xl font-semibold">Stamford Bridge</h1>
					<p class="text-base md:text-lg">The Bridge for every big game</p>
				</div>
			</div>
		</div>
		<div class="absolute left-5 right-5 top-9/16 flex -translate-y-1/2 transform justify-between">
			<button id="carousel-main-btn-prev" @click="prevClick" class="btn btn-ghost btn-primary p-2">
				<span class="text-primary-content size-6 group-hover:text-primary">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
						<path fill="currentColor" d="M16 19L5 12l11-7z" />
					</svg>
				</span>
			</button>
			<button id="carousel-main-btn-next" @click="nextClick" class="btn btn-ghost btn-primary p-2">
				<span class="rotate-180 text-primary-content size-6 group-hover:text-primary">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
						<path fill="currentColor" d="M16 19L5 12l11-7z" />
					</svg>
				</span>
			</button>
		</div>
	</div>
</template>
