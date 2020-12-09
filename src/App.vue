<template>
  <v-app>
    <v-main>
		<v-container>
			<h1 class="text-h1">Wikibase Sandbox</h1>
			<div class="text-subtitle-1">Create a Wikibase which you can view, edit, extend yourself. Feel free to experiment. Attention: The instance will be reset after 2 hours, so it is really only for experimenting!</div>
		</v-container>
		<v-container>
			<create-sandbox-form />
		</v-container>
	</v-main>
  </v-app>
</template>

<script>
import CreateSandboxForm from '@/components/CreateSandboxForm';
export default {
  name: 'App',
	components: { CreateSandboxForm },
};
</script>
