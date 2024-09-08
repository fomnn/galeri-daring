<script lang="ts" setup>
import { IonButton, IonContent, IonInput, IonLabel, IonPage } from '@ionic/vue'
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
	<IonPage>
		<IonContent>
			<div class="h-full bg-slate-50 flex flex-col items-center justify-center">
				<h1>Login</h1>
				<form @submit.prevent="() => router.replace('/')">
          <div class="">
            <IonLabel for="email">Email</IonLabel>
            <IonInput id="email" class="border" />
          </div>
          <div class="">
            <IonLabel for="password">Password</IonLabel>
            <IonInput id="password" type="password" class="border" />
          </div>
          <IonButton type="submit">Login</IonButton>
				</form>
			</div>
		</IonContent>
	</IonPage>
</template>

<style scoped>

</style>
