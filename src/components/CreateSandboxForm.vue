<template>
	<v-form>
		<v-radio-group v-model="dataSet">
			<v-container>
				<v-row>
					<v-col>
						<v-radio value="empty">
							<template v-slot:label>
								<v-card width="100%" height="100%">
									<v-card-title>Empty</v-card-title>
									<v-card-text>An empty Wikibase that you can fill with data yourself!</v-card-text>
								</v-card>
							</template>
						</v-radio>
					</v-col>

					<v-col>
						<v-radio value="library">
							<template v-slot:label>
								<v-card width="100%" height="100%">
									<v-card-title>Library data</v-card-title>
									<v-card-text>A collection of books and authors</v-card-text>
								</v-card>
							</template>
						</v-radio>
					</v-col>

					<v-col>
						<v-radio value="pokemon">
							<template v-slot:label>
								<v-card width="100%" height="100%">
									<v-card-title>Pokemon</v-card-title>
									<v-card-text>The first 151. Gotta catch 'em all!</v-card-text>
								</v-card>
							</template>
						</v-radio>
					</v-col>
				</v-row>
			</v-container>
		</v-radio-group>

		<v-btn color="primary" elevation="2" x-large @click="recaptchaAndCreateSandbox">
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
			dataSet: 'empty',
			signInLink: null,
			showSuccessDialog: false,
			showFailureDialog: false,
		}
	},

	methods: {
		async recaptchaAndCreateSandbox() {
			await this.$recaptchaLoaded();
			const token = await this.$recaptcha( 'createSandbox' );

			this.createSandbox( token );
		},

		createSandbox( recaptcha ) {
			fetch( `${ process.env.VUE_APP_API_URL }/sandbox/create`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify( {
					recaptcha,
					dataSet: this.dataSet,
				} ),
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
