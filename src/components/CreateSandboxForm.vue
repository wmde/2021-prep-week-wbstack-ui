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

		<v-dialog v-model="showFailureDialog" max-width="500">
			<v-card>
				<v-card-title class="overline error lighten-2">
					Failure!
				</v-card-title>
				<v-card-text class="pt-4">
					Could not create a Wikibase Sandbox at this time...
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
			showFailureDialog: false,
		}
	},

	methods: {
		createSandbox() {
			fetch( `${ process.env.VUE_APP_API_URL }/sandbox/create`, {
				method: 'POST',
				body: JSON.stringify( {} ), // recaptcha goes here?
			} ).then( ( response ) => {
				return response.json();
			} ).then( ( responseJson ) => {
				this.signInLink = 'https://' + responseJson.data.domain;
				this.showSuccessDialog = responseJson.success;
			} ).catch( () => {
				this.showFailureDialog = true;
			} );
		},
	}
}
</script>
