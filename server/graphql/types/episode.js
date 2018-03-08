'use strict';

const GraphQL = require('graphql');
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLInt,
} = GraphQL;

const ImageType = new GraphQL.GraphQLObjectType({
    name: "Image",
    description: 'Image Type, for all of the different images per episode',

    fields: () => ({
        medium: {
            type: GraphQLString,
            description: 'Original image resized to a medium frame'
        },
        original: {
            type: GraphQLString,
            description: "Original image for the episode"
        }
    })
})

const EpisodeType = new GraphQL.GraphQLObjectType({
    name: 'Episode',
    description: 'Episode Type, for all the episodes present in the given JSON.',

    fields: () => ({
        id: {
            type: GraphQLID,
            description: 'ID of the episode',
        },
        name: {
            type: GraphQLString,
            description: 'Title of the post',
        },
        url: {
            type: GraphQLString,
            description: 'URL of the episode on TV Maze',
        },
        season: {
            type: GraphQLInt,
            description: 'Season Number',
        },
        number: {
            type: GraphQLInt,
            description: 'Episode Number in a certain season',
        },

        airdate: {
            type: GraphQLString,
            description: 'Date the episode aired',
        },
        airtime: {
            type: GraphQLString,
            description: 'Time the episode aired on {airdate}',
        },
        runtime: {
            type: GraphQLInt,
            description: 'Runtime of the episode in minutes',
        },
        image: {
            type: ImageType,
            description: 'A collection of differently sized images for display'
        },
        summary: {
            type: GraphQLString,
            description: 'A summary of the episode'
        }
    })

});


module.exports = EpisodeType;