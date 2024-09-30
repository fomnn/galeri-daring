<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { IonLabel, IonTabBar, IonTabButton } from '@ionic/vue'
</script>

<template>
	<IonTabBar slot="bottom" class="h-16">
		<IonTabButton tab="home" href="/home" class="justify-between py-2">
			<!-- <IonIcon :icon="playCircle" /> -->
			<Icon icon="ph:images-square-duotone" class="text-3xl" />
			<IonLabel>Galeri</IonLabel>
		</IonTabButton>

		<IonTabButton tab="radio" href="/radio" class="justify-between py-2">
			<Icon icon="material-symbols:add-photo-alternate-outline" class="text-3xl" />
			<!-- <IonIcon :icon="radio" /> -->
			<IonLabel>Upload</IonLabel>
		</IonTabButton>

		<IonTabButton tab="library" href="/library" class="justify-between py-2">
			<Icon icon="material-symbols:account-circle-outline" class="text-3xl" />
			<!-- <IonIcon :icon="library" /> -->
			<IonLabel>Profil</IonLabel>
		</IonTabButton>
	</IonTabBar>
</template>
