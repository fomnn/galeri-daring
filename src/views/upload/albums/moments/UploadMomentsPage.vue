<script lang="ts" setup>
import { Camera, CameraResultType } from '@capacitor/camera'
import { Icon } from '@iconify/vue'
import { IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const photos = ref<string[]>([])

async function handlePickFromGallery() {
	const photos2 = await Camera.pickImages({ limit: 1 })
	photos.value = photos2.photos.map(photo => photo.webPath)
}

function handleDeleteAllPhotos() {
	photos.value = []
}

async function handleAddPhotos() {
	const photos2 = await Camera.pickImages({ limit: 1 })
	photos.value = photos.value.concat(photos2.photos.map(photo => photo.webPath))
}
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
					<IonTitle>Pilih Foto</IonTitle>
				</IonToolbar>
			</IonHeader>
			<div class="h-full px-6 py-6 flex flex-col gap-4">
				<div v-if="photos.length > 0" class=" px-3 py-3 bg-zinc-100 border rounded-md max-h-60 overflow-y-scroll">
					<div class="h-fit grid grid-cols-5 gap-2">
						<div v-for="(photo, i) in photos" :key="i" class="w-full aspect-square overflow-hidden rounded-md relative">
							<img :src="photo" alt="" class="w-full h-full object-cover object-center">
						</div>
					</div>
				</div>
				<button v-if="photos.length === 0" type="button" class="block bg-zinc-800 text-white rounded-md w-full h-10" @click="handlePickFromGallery">
					Pilih dari galeri
				</button>
				<div v-else class="flex flex-col gap-2">
					<button type="button" class="block bg-zinc-600 text-white rounded-md w-full h-10" @click="handleAddPhotos">
						Tambah Foto
					</button>
					<button type="button" class="block bg-zinc-600 text-white rounded-md w-full h-10" @click="handleDeleteAllPhotos">
						Hapus Semua Foto
					</button>
					<button type="button" class="block bg-zinc-800 text-white rounded-md w-full h-10">
						Masukkan Foto
					</button>
				</div>
			</div>
		</IonContent>
	</IonPage>
</template>

<style scoped>

</style>
