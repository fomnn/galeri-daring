<script lang="ts" setup>
import UploadFAB from '@/components/UploadFAB.vue'
import { IonBackButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonFab, IonFabButton, IonFabList, IonHeader, IonIcon, IonItemOption, IonNavLink, IonPage, IonTitle, IonToolbar } from '@ionic/vue'
import { caretBack } from 'ionicons/icons'
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
	<IonPage>
		<IonContent>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Pilih Album</IonTitle>
				</IonToolbar>
			</IonHeader>
			<div class="h-full">
				<IonCard @click.prevent="() => router.push('/upload/12312')">
					<IonCardHeader>
						<IonCardTitle>Pasangan</IonCardTitle>
					</IonCardHeader>

					<IonCardContent>
						<p>Upload foto pasanganmu disini</p>
					</IonCardContent>
				</IonCard>
				<IonCard @click.prevent="() => router.push('/upload/12312')">
					<IonCardHeader>
						<IonCardTitle>Keluarga</IonCardTitle>
					</IonCardHeader>

					<IonCardContent>
						<p>Upload foto keluargamu disini</p>
					</IonCardContent>
				</IonCard>
			</div>
			<UploadFAB />
		</IonContent>
	</IonPage>
</template>

<style scoped></style>
