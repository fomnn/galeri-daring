<script lang="ts" setup>
import { Camera, CameraResultType } from '@capacitor/camera'
import { Toast } from '@capacitor/toast'
import { IonContent, IonPage } from '@ionic/vue'

import { onMounted, useTemplateRef } from 'vue'

const imageElement = useTemplateRef('imageElement')

async function showHelloToast() {
	await Toast.show({
		text: 'Hello!',
	})
}

async function takePicture() {
	const image = await Camera.getPhoto({
		quality: 90,
		allowEditing: true,
		resultType: CameraResultType.Uri,
	})

	// image.webPath will contain a path that can be set as an image src.
	// You can access the original file using image.path, which can be
	// passed to the Filesystem API to read the raw data of the image,
	// if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
	const imageUrl = image.webPath

	// Can be set to the src of an image now
	if (imageElement.value && imageUrl) {
		// eslint-disable-next-line no-console
		console.log(imageUrl)
		imageElement.value.src = imageUrl
	}
}

onMounted(() => {

})
</script>

<template>
	<IonPage>
		<IonContent>
			<div class="h-full bg-slate-50 px-9 py-4">
				<div class="flex flex-col gap-2">
					<img ref="imageElement" alt="placeholder" class="w-full h-96 object-cover bg-slate-400 rounded-lg">
					<button class="bg-slate-900 text-white px-4 py-2 rounded-md" @click="takePicture">
						Take Picture
					</button>
					<button class="bg-slate-900 text-white px-4 py-2 rounded-md" @click="showHelloToast">
						Say hello
					</button>
				</div>
			</div>
		</IonContent>
	</IonPage>
</template>

<style scoped>

</style>
