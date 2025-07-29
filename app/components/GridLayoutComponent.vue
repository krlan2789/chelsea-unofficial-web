<script lang="ts" setup>
import type IGridLayoutProp from "~/types/components/IGridLayoutProp";

defineProps<IGridLayoutProp>();
</script>

<template>
	<section class="w-full h-auto my-8 flex flex-col">
		<div
			class="section-header"
			:class="{
				'justify-start': alignTitle == 'left',
				'justify-end': alignTitle == 'right',
				'justify-center': alignTitle == 'center',
			}"
		>
			<h2>{{ title }}</h2>
		</div>
		<section
			class="grid justify-center w-full 2xl:mx-auto"
			:class="{
				'grid-cols-1 md:grid-cols-2 gap-4 md:gap-2 xl:gap-3': compact && !moreItems,
				'grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-8 md:gap-6 2xl:gap-4': moreItems && !compact,
				'grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8 md:gap-6 2xl:gap-4': !moreItems && !compact,
			}"
		>
			<slot></slot>
		</section>
	</section>
</template>
