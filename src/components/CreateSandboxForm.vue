<template>
	<v-form>
		<!-- recaptcha goes somewhere here -->
		<v-btn color="primary" elevation="2" x-large @click="createSandbox">
			Create a new Wikibase sandbox!
		</v-btn>
	</v-form>
</template>

<script>
export default {
	name: 'CreateSandboxForm',

	data() {
		return {
			signInLink: null,
		}
	},

	methods: {
		async createSandbox() {
			const response = await ( await fetch( `${ process.env.VUE_APP_API_URL }/sandbox/create`, {
				method: 'POST',
				body: JSON.stringify( {} ), // recaptcha goes here?
			} ) ).json();

			console.log( response.signInLink );
		},
	}
}
</script>
