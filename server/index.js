/**
 * This file is the entry point for the server. It is responsible for
 * starting the server and listening for requests.
 *
 * Avoid modifying this file unless you know what you are doing.
 */

const { application } = require('../.formidable/build')

const start = () => {
	application.then((app) => {
		app.fastify().listen({
			port: process.env.PORT || 3000,
			host: process.env.HOST || 'localhost'
		}, (_error, address) => {
			if (_error) {
				console.error(_error)
			} else {
				console.log(`Listening on ${address}`)
			}
		})
	})
}

start()
