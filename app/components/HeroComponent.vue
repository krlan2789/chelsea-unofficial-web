<script lang="ts" setup></script>

<template>
	<section class="hero h-auto min-h-[400px] md:min-h-[480px]">
		<div class="hero-content h-[56vh] p-0">
			<CarouselComponent name="hero" hideNavigation auto :interval="5000" class="h-full">
				<template #items>
					<div class="carousel-item relative w-full">
						<img src="/img/headlines/1.jpg" class="w-full object-cover origin-top" />
						<div
							class="absolute flex flex-col gap-3 md:gap-4 justify-end pb-8 px-4 md:pb-12 md:px-8 inset-0 bg-gradient-to-t from-neutral via-neutral/88 via-30% to-transparent text-center text-neutral-content">
							<h1 class="text-xl md:text-2xl font-semibold">
								For the first time to winning UEFA Champions League
							</h1>
							<p class="text-sm md:text-base">
								Beat the favorite, FC Bayern Munich, at their home
							</p>
						</div>
					</div>
					<div class="carousel-item relative w-full">
						<img src="/img/headlines/2.webp" class="w-full object-cover origin-top" />
						<div
							class="absolute flex flex-col gap-3 md:gap-4 justify-end pb-8 px-4 md:pb-12 md:px-8 inset-0 bg-gradient-to-t from-neutral via-neutral/88 via-30% to-transparent text-center text-neutral-content">
							<h1 class="text-xl md:text-2xl font-semibold">
								Winning the first edition of FIFA Club World Cup
							</h1>
							<p class="text-sm md:text-base">
								Beat Paris Saint-Germain FC, a team with an outstanding performance in that season
							</p>
						</div>
					</div>
					<div class="carousel-item relative w-full">
						<img src="/img/headlines/3.webp" class="w-full object-cover origin-top" />
						<div
							class="absolute flex flex-col gap-3 md:gap-4 justify-end pb-8 px-4 md:pb-12 md:px-8 inset-0 bg-gradient-to-t from-neutral via-neutral/88 via-30% to-transparent text-center text-neutral-content">
							<h1 class="text-xl md:text-2xl font-semibold">
								Another incredible season in Women's Super League
							</h1>
							<p class="text-sm md:text-base">
								Go unbeaten in WSL season, becoming first team to have two 'Invincible' campaigns
							</p>
						</div>
					</div>
					<div class="carousel-item relative w-full">
						<img src="/img/headlines/4.jpg" class="w-full object-cover origin-top" />
						<div
							class="absolute flex flex-col gap-3 md:gap-4 justify-end pb-8 px-4 md:pb-12 md:px-8 inset-0 bg-gradient-to-t from-neutral via-neutral/88 via-30% to-transparent text-center text-neutral-content">
							<h1 class="text-xl md:text-2xl font-semibold">Stamford Bridge</h1>
							<p class="text-sm md:text-base">The Bridge for every big game</p>
						</div>
					</div>
				</template>
			</CarouselComponent>
		</div>
	</section>
</template>
