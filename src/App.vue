<script setup lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue'
import Toaster from './components/ui/toast/Toaster.vue';
</script>

<template>
	<IonApp>
		<IonRouterOutlet />
	</IonApp>
  <Toaster />
</template>
