<script lang="ts" setup>
import { useToast } from '@/components/ui/toast/use-toast'
import { Camera, CameraResultType } from '@capacitor/camera'
import { Directory, Encoding, Filesystem } from '@capacitor/filesystem'
import { FilePicker } from '@capawesome/capacitor-file-picker'
import { IonContent, IonPage } from '@ionic/vue'
import { image } from 'ionicons/icons'
import { onMounted, useTemplateRef } from 'vue'

const imageElement = useTemplateRef('imageElement')

const { toast } = useToast()

async function writeSecretFile() {
	const result = await Filesystem.writeFile({
		path: 'secrets/text.txt',
		data: 'This is a sigma',
		directory: Directory.Documents,
		encoding: Encoding.UTF8,
	})

	toast({
		title: 'Hello',
		description: result.uri,
	})
}

async function readDir() {
	const result = await Filesystem.readdir({
		directory: Directory.Documents,
		path: 'images',
	})

	const file = await Filesystem.readFile({
		path: `images/${result.files[0].name}`,
		directory: Directory.Documents,
		encoding: Encoding.UTF8,
	})

	toast({
		title: 'Hello',
		// description: result.files[0].name,
    description: file.data.toString(),
	})

  if (imageElement.value && file.data) {
    imageElement.value.src = `data:image/jpeg;base64,${file.data.toString()}`
  }
}

async function showHelloToast() {
	toast({
		title: 'Hello',
		description: 'Hello from the toast',
	})
}

async function pickFromGallery() {
	const result = await FilePicker.pickImages({ limit: 1, readData: true })

	if (result.files.length !== 0 && result.files[0].data) {
		await Filesystem.writeFile({
			data: result.files[0].data,
			path: `images/${result.files[0].name}`,
			directory: Directory.Documents,
		})
	}

	toast({
		title: 'Hello',
		description: result.files[0].name,
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
		toast({
			title: 'hehe',
			description: imageUrl,
		})
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
					<button class="bg-slate-900 text-white px-4 py-2 rounded-md" @click="pickFromGallery">
						Pink from Gallery
					</button>
					<button class="bg-slate-900 text-white px-4 py-2 rounded-md" @click="writeSecretFile">
						Write Secret File
					</button>
					<button class="bg-slate-900 text-white px-4 py-2 rounded-md" @click="readDir">
						Read file
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
