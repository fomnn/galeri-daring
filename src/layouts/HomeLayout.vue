<script lang="ts" setup>
import { Icon } from '@iconify/vue'
import { IonIcon, IonLabel, IonPage, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/vue'
import { library, playCircle, radio, search } from 'ionicons/icons'
</script>

<template>
	<IonPage>
		<IonTabs>
			<IonRouterOutlet />
			<IonTabBar slot="bottom" class="h-16">
				<IonTabButton tab="home" href="/home" class="justify-between py-2">
					<Icon icon="ph:images-square-duotone" class="text-3xl" />
					<IonLabel>Galeri</IonLabel>
				</IonTabButton>

				<IonTabButton tab="radio" href="/upload" class="justify-between py-2">
					<Icon icon="material-symbols:add-photo-alternate-outline" class="text-3xl" />
					<IonLabel>Upload</IonLabel>
				</IonTabButton>

				<IonTabButton tab="library" href="/library" class="justify-between py-2">
					<Icon icon="material-symbols:account-circle-outline" class="text-3xl" />
					<IonLabel>Profil</IonLabel>
				</IonTabButton>
			</IonTabBar>
		</IonTabs>
	</IonPage>
</template>
