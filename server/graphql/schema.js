'use strict';
 
const GraphQL = require('graphql');
const {
	GraphQLObjectType,
	GraphQLSchema,
} = GraphQL;
 
 
// import the user query file we created
const EpisodeQuery = require('./queries/episode');
 
 
// lets define our root query
const RootQuery = new GraphQLObjectType({
	name: 'RootQueryType',
	description: 'This is the default root query provided by our application',
	fields: {
		episodes: EpisodeQuery.index(),
	}
});
 
 
// export the schema
module.exports = new GraphQLSchema({
	query: RootQuery,
});