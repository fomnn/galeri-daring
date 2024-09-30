<script lang="ts" setup>
import { Icon } from '@iconify/vue'
import { IonBackButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue'
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
	<IonPage>
		<IonContent>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot="start">
						<button class="rounded-full active:bg-sky-200 transition-colors duration-500 size-10 flex items-center justify-center" @click.prevent="() => router.go(-1)">
							<Icon icon="lucide:chevron-left" />
						</button>
					</IonButtons>
					<IonTitle>Pilih Momen</IonTitle>
				</IonToolbar>
			</IonHeader>
			<div class="h-full">
				<IonCard @click.prevent="() => router.push('/upload/123/3232')">
					<IonCardHeader>
						<IonCardTitle>Umum?</IonCardTitle>
					</IonCardHeader>
					<!-- <IonCardContent>
						<p>Upload foto pasanganmu disini</p>
					</IonCardContent> -->
				</IonCard>
				<IonCard @click.prevent="() => router.push('/upload/123/3232')">
					<IonCardHeader>
						<IonCardTitle>Valentine</IonCardTitle>
					</IonCardHeader>
					<!-- <IonCardContent>
						<p>Upload foto pasanganmu disini</p>
					</IonCardContent> -->
				</IonCard>
				<IonCard @click.prevent="() => router.push('/upload/123/3232')">
					<IonCardHeader>
						<IonCardTitle>Natal</IonCardTitle>
					</IonCardHeader>

					<!-- <IonCardContent>
						<p>Upload foto keluargamu disini</p>
					</IonCardContent> -->
				</IonCard>
			</div>
		</IonContent>
	</IonPage>
</template>

<style scoped>

</style>
