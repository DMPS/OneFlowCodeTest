'use strict'

const GraphQL = require('graphql');
const {
	GraphQLList,
	GraphQLString,
	GraphQLNonNull,
	GraphQLInt
} = GraphQL;

// import the Post type we created
const EpisodeType = require('../types/episode');

// import the Post resolver we created
const EpisodeResolver = require('../resolvers/episode');


module.exports = {

	index() {
		return {
			type: new GraphQLList(EpisodeType),
			description: 'This will return all the episode we find in the json.',
			args: {
				season: {
					type: GraphQLInt,
					description: 'An optional parameter for a certain season',
				}
			},
			resolve(parent, args, context, info) {
				return EpisodeResolver.index(args);
			}
		}
	},

};