<script setup lang="ts">
import type ICarouselProp from '~/types/components/ICarouselProp';

const { auto, interval, hideNavigation, name } = defineProps<ICarouselProp>();

let prevClick: () => void;
let nextClick: () => void;

onMounted(() => {
	const { prev, next } = useHorizontalScrollable("#carousel-" + name, "#carousel-" + name + " .carousel-item", "#carousel-btn-prev-" + name, "#carousel-btn-next-" + name);
	prevClick = () => {
		prev("#carousel-" + name);
	};

	nextClick = () => {
		next("#carousel-" + name, auto ?? false);
	};

	if (auto || hideNavigation) setInterval(() => {
		nextClick();
	}, interval ?? 4000);
});
</script>

<template>
	<section class="min-h-48 w-full h-full p-0 flex-col">
		<div class="relative w-full h-full">
			<div :id="'carousel-' + name"
				class="carousel carousel-center overflow-y-hidden overflow-x-auto w-full h-full max-h-full">
				<slot name="items"></slot>
			</div>

			<!-- Navigation -->
			<div v-if="!hideNavigation"
				class="absolute left-0 right-0 top-2/5 flex origin-center transform justify-between">
				<button :id="'carousel-btn-prev-' + name" @click="prevClick"
					class="absolute top-1/2 left-5 btn btn-ghost btn-primary p-2">
					<span class="text-primary-content size-4 lg:size-6 group-hover:text-primary">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
							<path fill="currentColor" d="M16 19L5 12l11-7z" />
						</svg>
					</span>
				</button>

				<button :id="'carousel-btn-next-' + name" @click="nextClick"
					class="absolute top-1/2 right-5 btn btn-ghost btn-primary p-2">
					<span class="rotate-180 text-primary-content size-4 lg:size-6 group-hover:text-primary">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
							<path fill="currentColor" d="M16 19L5 12l11-7z" />
						</svg>
					</span>
				</button>
			</div>
			<!-- Navigation -->
		</div>
	</section>
</template>
