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
					success: 1,
					data: {
						domain: 'pink-fluffy-unicorns.wikibase.cloud',
					}
				};
			} );
		},
	} );
}
