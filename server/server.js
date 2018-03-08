'use strict';

const express = require('express');
const body_parser = require('body-parser');

const expressGraphQL = require('express-graphql');

// let's import the schema file we just created
const GraphQLSchema = require('./graphql/schema');


const app = express();

app.use(body_parser.json({
	limit: '50mb'
}));

app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

app.use(
	'/',
	expressGraphQL(() => {
		return {
			graphiql: true,
			schema: GraphQLSchema,
		}
	})
);

// let's set the port on which the server will run
app.set('port', 1337);

// start the server
app.listen(
	app.get('port'),
	() => {
		const port = app.get('port');
		console.log('GraphQL Server Running at http://127.0.0.1:' + port);
	}
);