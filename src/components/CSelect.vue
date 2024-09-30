<script setup lang="ts">
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'

const { label = 'Label' } = defineProps<{
	label?: string
}>()

const vocalList = ['a', 'i', 'u', 'e', 'o']
</script>

<template>
	<div>
		<p class="text-sm">
			{{ label }}
		</p>
		<div class="border rounded">
			<Select>
				<SelectTrigger>
					<SelectValue :placeholder="`Select ${vocalList.includes(label[0].toLowerCase()) ? 'an' : 'a'} ${label.toLowerCase()}`" />
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						<SelectLabel>Fruits</SelectLabel>
						<SelectItem value="apple">
							Apple
						</SelectItem>
					</SelectGroup>
				</SelectContent>
			</Select>
		</div>
	</div>
</template>
