<script setup lang="ts">
import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue'
import { useRouter } from 'vue-router'
</script>

<template>
	<IonPage>
		<IonContent>
      <div class="px-4 py-6 bg-slate-50">
        <h1>Galeri</h1>
      </div>
			<div class="h-full bg-slate-50 gap-2 px-4 py-2 space-y-6">
				<div v-for="i in 3" :key="i" class="border px-2 py-1">
					<div class="flex items-center justify-between">
						<h2 class="text-2xl font-semibold">
							Pasangan
						</h2>
						<button class="text-sm">
							Lihat Semua
						</button>
					</div>
					<div class="grid grid-cols-3 auto-rows-auto gap-3">
						<div v-for="u in 6" :key="u" class="border px-2 py-2">
							<h3>Valentine</h3>
							<div class="grid grid-cols-2 auto-rows-auto gap-2">
								<div v-for="y in 4" :key="y" class="w-full aspect-square bg-orange-200" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</IonContent>
	</IonPage>
</template>

<style scoped>
</style>
