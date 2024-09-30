<script lang="ts" setup>
import { Icon } from '@iconify/vue'
import { ref } from 'vue'
import Button from './ui/button/Button.vue'

const showFABMenu = ref(false)
</script>

<template>
	<div class="absolute bottom-4 right-6 flex gap-4 items-end flex-col">
		<div :class="showFABMenu ? 'translate-x-0' : 'translate-x-[150%]'" class="transition-all duration-300">
			<Button variant="secondary" class="px-4 py-2 rounded-md border border-zinc-300 flex items-center gap-2">
				<Icon icon="material-symbols:add-box" class="text-lg" />
				<span>
					Tambah Moment
				</span>
			</Button>
		</div>
		<button :class="{ 'rotate-[135deg]': showFABMenu }" class="bg-sky-400 transition-all duration-300 size-12 rounded-full flex items-center justify-center" @click="showFABMenu = !showFABMenu">
			<Icon icon="material-symbols:add-rounded" class="text-2xl text-white" />
			<Icon icon="solar:adhesive-plaster-bold" class="text-2xl text-white" />
		</button>
	</div>
</template>
