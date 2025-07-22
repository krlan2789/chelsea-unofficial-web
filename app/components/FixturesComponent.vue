<script setup lang="ts">
let prevClick: () => void;
let nextClick: () => void;

onMounted(() => {
	const { prev, next } = useHorizontalScrollable("#carousel-fixtures", "#carousel-fixtures .carousel-item", "#carousel-fixtures-btn-prev", "#carousel-fixtures-btn-next");

	prevClick = prev;
	nextClick = next;
});
</script>

<template>
	<div class="h-64 w-full p-0 flex-col">
		<div class="relative h-full w-full">
			<div id="carousel-fixtures" class="carousel carousel-center overflow-x-auto size-full max-h-full">
				<div id="fixtures-slide1" class="carousel-item relative w-auto">
					<div class="card bg-neutral text-neutral-content w-screen max-w-[480px]">
						<div class="card-body items-center text-center">
							<h2 class="card-title">Cookies!</h2>
							<p>We are using cookies for no reason.</p>
							<div class="card-actions justify-end">
								<button class="btn btn-primary">Accept</button>
								<button class="btn btn-ghost">Deny</button>
							</div>
						</div>
					</div>
				</div>
				<div id="fixtures-slide1" class="carousel-item relative w-auto">
					<div class="card bg-neutral text-neutral-content w-screen max-w-[480px]">
						<div class="card-body items-center text-center">
							<h2 class="card-title">Cookies!</h2>
							<p>We are using cookies for no reason.</p>
							<div class="card-actions justify-end">
								<button class="btn btn-primary">Accept</button>
								<button class="btn btn-ghost">Deny</button>
							</div>
						</div>
					</div>
				</div>
				<div id="fixtures-slide1" class="carousel-item relative w-auto">
					<div class="card bg-neutral text-neutral-content w-screen max-w-[480px]">
						<div class="card-body items-center text-center">
							<h2 class="card-title">Cookies!</h2>
							<p>We are using cookies for no reason.</p>
							<div class="card-actions justify-end">
								<button class="btn btn-primary">Accept</button>
								<button class="btn btn-ghost">Deny</button>
							</div>
						</div>
					</div>
				</div>
				<div id="fixtures-slide1" class="carousel-item relative w-auto">
					<div class="card bg-neutral text-neutral-content w-screen max-w-[480px]">
						<div class="card-body items-center text-center">
							<h2 class="card-title">Cookies!</h2>
							<p>We are using cookies for no reason.</p>
							<div class="card-actions justify-end">
								<button class="btn btn-primary">Accept</button>
								<button class="btn btn-ghost">Deny</button>
							</div>
						</div>
					</div>
				</div>
				<div id="fixtures-slide1" class="carousel-item relative w-auto">
					<div class="card bg-neutral text-neutral-content w-screen max-w-[480px]">
						<div class="card-body items-center text-center">
							<h2 class="card-title">Cookies!</h2>
							<p>We are using cookies for no reason.</p>
							<div class="card-actions justify-end">
								<button class="btn btn-primary">Accept</button>
								<button class="btn btn-ghost">Deny</button>
							</div>
						</div>
					</div>
				</div>
				<div id="fixtures-slide1" class="carousel-item relative w-auto">
					<div class="card bg-neutral text-neutral-content w-screen max-w-[480px]">
						<div class="card-body items-center text-center">
							<h2 class="card-title">Cookies!</h2>
							<p>We are using cookies for no reason.</p>
							<div class="card-actions justify-end">
								<button class="btn btn-primary">Accept</button>
								<button class="btn btn-ghost">Deny</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- Navigation -->
			<div class="absolute left-0 right-0 top-2/5 flex origin-center transform justify-between">
				<button id="carousel-fixtures-btn-prev" @click="prevClick" class="absolute top-1/2 left-5 btn btn-ghost btn-primary p-2">
					<span class="text-primary-content size-6 group-hover:text-primary">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
							<path fill="currentColor" d="M16 19L5 12l11-7z" />
						</svg>
					</span>
				</button>
				<button id="carousel-fixtures-btn-next" @click="nextClick" class="absolute top-1/2 right-5 btn btn-ghost btn-primary p-2">
					<span class="rotate-180 text-primary-content size-6 group-hover:text-primary">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
							<path fill="currentColor" d="M16 19L5 12l11-7z" />
						</svg>
					</span>
				</button>
			</div>
			<!-- Navigation -->
		</div>
	</div>
</template>
