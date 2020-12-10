import { createServer, Response } from 'miragejs'

/**
 * Fake API for development
 */
export function fakeApi() {
	return createServer( {
		routes() {
			this.urlPrefix = process.env.VUE_APP_API_URL;

			this.post( '/sandbox/create', () => {
				return new Response( 200, {}, {
					success: 1,
					data: {
						domain: 'pink-fluffy-unicorns.wikibase.cloud',
					}
				} );
			} );

			// this.post( '/sandbox/create', () => {
			// 	return new Response( 500, {}, 'sadness' );
			// } );
		},
	} );
}
