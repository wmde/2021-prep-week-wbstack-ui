<template>
	<v-form>
		<!-- recaptcha goes somewhere here -->
		<v-btn color="primary" elevation="2" x-large @click="createSandbox">
			Create a new Wikibase sandbox!
		</v-btn>

		<v-dialog v-model="showSuccessDialog" max-width="500">
			<v-card>
				<v-card-title class="overline success lighten-2">
					Success!
				</v-card-title>
				<v-card-text class="pt-4">
					You created a new Wikibase! Here is your sign in link: <a :href="signInLink">{{ signInLink }}</a>
				</v-card-text>
			</v-card>
		</v-dialog>
	</v-form>
</template>

<script>
export default {
	name: 'CreateSandboxForm',

	data() {
		return {
			signInLink: null,
			showSuccessDialog: false,
		}
	},

	methods: {
		async createSandbox() {
			const response = await ( await fetch( `${ process.env.VUE_APP_API_URL }/sandbox/create`, {
				method: 'POST',
				body: JSON.stringify( {} ), // recaptcha goes here?
			} ) ).json();

			this.signInLink = response.signInLink;
			this.showSuccessDialog = true;
		},
	}
}
</script>
