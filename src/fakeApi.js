import { createServer } from 'miragejs'

/**
 * Fake API for development
 */
export function fakeApi() {
	return createServer( {
		routes() {
			this.urlPrefix = process.env.VUE_APP_API_URL;

			this.post( '/sandbox/create', () => {
				return {
					signInLink: 'https://pink-fluffy-unicorns.wikibase.cloud/?admin=yes', // TODO return something more sensible?
				};
			} );
		},
	} );
}
