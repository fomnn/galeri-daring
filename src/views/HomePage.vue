<script setup lang="ts">
import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue'
import { useRouter } from 'vue-router'
</script>

<template>
	<IonPage>
		<IonContent>
			<div class="h-full bg-slate-50 grid grid-cols-5 auto-rows-min gap-2 px-4 py-6">
				<div v-for="i in 52" class="w-full aspect-square bg-orange-300" :key="i" />
			</div>
		</IonContent>
	</IonPage>
</template>

<style scoped>
</style>
