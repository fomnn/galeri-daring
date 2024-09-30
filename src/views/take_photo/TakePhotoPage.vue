<script lang="ts" setup>
import CSelect from '@/components/CSelect.vue'
import { Camera, CameraResultType } from '@capacitor/camera'
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue'
import { images } from 'ionicons/icons'
import { onMounted, ref, useTemplateRef } from 'vue'
import { onBeforeRouteUpdate, useRouter } from 'vue-router'

const imageSrc = ref<string>()

async function takePicture() {
	const image = await Camera.getPhoto({
		// await Camera.getPhoto({
		quality: 90,
		allowEditing: true,
		resultType: CameraResultType.Uri,
	})

	// image.webPath will contain a path that can be set as an image src.
	// You can access the original file using image.path, which can be
	// passed to the Filesystem API to read the raw data of the image,
	// if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
	const imageUrl = image.webPath
	if (!imageUrl)
		return

	// Can be set to the src of an image now

	imageSrc.value = imageUrl
}
</script>

<template>
	<IonPage>
		<IonContent>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Take Photo</IonTitle>
				</IonToolbar>
			</IonHeader>
			<div class="px-4 py-6 bg-slate-50 h-full flex flex-col gap-4">
        <template v-if="!imageSrc">
          <button type="button" class="block bg-zinc-800 text-white rounded-md w-full h-10" @click="takePicture">
            Ambil gambar
					</button>
				</template>
				<template v-else>
          <div class="w-full h-fit p-2 bg-slate-200 rounded">
            <img :src="imageSrc" alt="" class="w-full h-full object-cover">
          </div>
          <button type="button" class="foto-ulang-button flex items-center justify-center border-zinc-500 text-center w-full h-8" @click="takePicture">
            Foto Ulang
					</button>
					<div class="space-y-4">
						<CSelect label="Album" />
						<CSelect label="Moment" />
						<button type="button" class="block bg-zinc-800 text-white rounded-md w-full h-10">
							Masukkan Foto
						</button>
					</div>
				</template>
			</div>
		</IonContent>
	</IonPage>
</template>

<style scoped>
.foto-ulang-button {
  border: 1px solid #4a5568;
  @apply rounded text-sm
}
</style>
